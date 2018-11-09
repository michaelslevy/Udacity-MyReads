import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
