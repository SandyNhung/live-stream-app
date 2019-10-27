import React, { Component } from 'react'
import { getStreams } from '../../actions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class StreamList extends Component {
    componentDidMount(){
        this.props.getStreams()
    }
    renderList(){
        return this.props.stream.map(s =>{
            return (
                <div className="item" key={s.id}>
                    <i className="large middle aliged icon camera" />
                    <div className="content">
                        <Link to={`/stream/${s.id}`}>
                            <h2>{s.title}</h2>
                        </Link>
                        <div className="description">{s.description}</div>
                        {this.renderAdmin(s)}
                    </div>
                </div>
            )
        })
    }

    renderAdmin(stream){
        if(stream.userId === this.props.auth.userId){
            return (
                <div>
                    <Link to={`/stream/edit/${stream.id}`} className="ui primary button">EDIT</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui red button">DELETE</Link>
                </div>
            )
        }
    }

    renderCreate(){
        if(this.props.auth.isSignedIn){
            return (
                <div>
                    <Link to="/stream/create" >
                        <button className="ui primary button">CREATE STREAM</button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()} 
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        stream: Object.values(state.stream),
        auth: state.GoogleAuth,
    }
}

export default connect(mapStatetoProps, {getStreams})(StreamList)