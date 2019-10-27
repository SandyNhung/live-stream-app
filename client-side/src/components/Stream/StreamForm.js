import React, { Component } from 'react'
import {Field, reduxForm } from 'redux-form'


class StreamForm extends Component {
    renderField = ({input, label, type, meta:{touched, error} }) => {
        const className = `field ${error && touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched && (error && <div className="ui pointing red basic label">{error}</div>)}
                </div>
            </div>
        )
    }

    onSubmit = formValues =>{
        this.props.onSubmit(formValues)
    }

    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" type="text" label="Title" component={this.renderField} />
                    <Field name="description" type="text" label="Description" component={this.renderField}/>
                    <div>
                        <button type="submit" className="ui primary button">Submit</button>
                    </div>
                </form>
            </div>
        )    
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title){
        errors.title = 'Required'
    }
    if(!formValues.description){
        errors.description = 'Required'
    }
    return errors
}


export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm)