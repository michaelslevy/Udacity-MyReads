import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import Register from './Register';
import { Route, Router, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register"  component={Register} />
        <Route path="/home"  component={Home} />
        <Route path="/leaderboard"  component={Leaderboard} />
      </Switch>
    );
  }
}

export default App;
