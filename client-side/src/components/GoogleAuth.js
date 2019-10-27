import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signOut, signIn} from '../actions'

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                client_id: 'insert your own google client_id',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    
    onAuthChange = isSignedIn => {
        if( isSignedIn ){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut()
        }
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return <div>I don't know if we are assigned</div>
        } else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"></i>
                        Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon"></i>
                    Sign In
                </button>
            )
        }
    }
    
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return { isSignedIn: state.GoogleAuth.isSignedIn }
}


export default connect(mapStatetoProps, {signIn, signOut})(GoogleAuth)