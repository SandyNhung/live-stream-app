import React, { Component } from 'react'
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import StreamCreate from './Stream/StreamCreate';
import StreamDelete from './Stream/StreamDelete';
import StreamList from './Stream/StreamList';
import StreamEdit from './Stream/StreamEdit';
import StreamShow from './Stream/StreamShow';



import GoogleAuth from './GoogleAuth';
import history from '../history'


export default class NabBar extends Component {
    render() {
        return (
            <Router history={history}>
            <div>
              <div className="ui secondary pointing menu">
                <div className="item">
                  <Link to="/">Streamy</Link>
                </div>
                <div className="item">
                  <Link to="/streams">All Streams</Link>
                </div>
                <div className="right menu">
                  <div className="ui item">
                    <GoogleAuth />
                  </div>
                </div>
              </div>
      
              <div className="ui container">
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>

                  <Route path="/" exact>
                    <StreamList />
                  </Route>

                  <Route path="/stream/create" exact>
                    <StreamCreate />
                  </Route>

                  <Route path="/stream/delete/:id" exact
                         component={StreamDelete}>
                  </Route>

                  <Route path="/stream/:id" exact
                         component={StreamShow}>
                  </Route>

                  <Route path="/stream/edit/:id" exact
                         component={StreamEdit}>
                  </Route>

                </Switch>
              </div> 
            </div>
          </Router>
        )
    }
}
