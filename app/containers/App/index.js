import React, { Component } from 'react';
import store from 'store';
import { withRouter, Route } from 'react-router-dom';
import { ReactReduxInternetConnection } from 'react-redux-internet-connection';
import { connect } from 'react-redux';
import Routes from './routes';


class Index extends Component {
  render() {
    return (
      <div>
        <Route component={Routes} />
      </div>
    );
  }
}


export default Index;
