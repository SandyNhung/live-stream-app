import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash'

class StreamEdit extends Component {
    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editStream(formValues, this.props.match.params.id)
    }

    render(){
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={_.pick( this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {getStream, editStream})(StreamEdit)