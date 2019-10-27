import React from 'react'
import Modal from '../../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import {getStream, deleteStream} from '../../actions'
import {Link} from 'react-router-dom'

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    renderActions(){
        const id = this.props.match.params.id

        return(
            <React.Fragment>
                <button 
                    className="ui red button" 
                    onClick={() => this.props.deleteStream(id)}
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent(){
        if(!this.props.stream){
            return "Are you sure to delete this stream"
        }

        return `Are you sre to delete this stream with title: ${this.props.stream.title}`
    }

    render(){
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                action={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )    
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream : state.stream[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {getStream, deleteStream})(StreamDelete)