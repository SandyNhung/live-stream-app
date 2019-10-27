import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getStream} from '../../actions'
import flv from 'flv.js'

class StreamShow extends Component {
    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount(){
        const {id} = this.props.match.params
        this.props.getStream(id)
        this.buildPlayer()
       
    }

    componentDidUpdate(){
        this.buildPlayer()
    }

    componentWillUnmount(){
        this.player.destroy()
    }

    buildPlayer(){
        const {id} = this.props.match.params
        if(this.player || !this.props.stream){
            return
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }

    render() {
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
                <h2>Title: {this.props.stream.title}</h2>
                <div>Content: {this.props.stream.description}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.stream[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getStream})(StreamShow)
