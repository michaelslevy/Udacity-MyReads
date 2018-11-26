import React, { Component } from 'react';
import '../App.css';
import Login from '../components/login/Login';
import App from './App';
import { Route, Switch } from 'react-router-dom'

class Authenticate extends Component {

  render() {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/"  component={App} />
      </Switch>
    );
  }
}

export default Authenticate
