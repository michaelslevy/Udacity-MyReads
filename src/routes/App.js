import React, { Component } from 'react';
import Home from '../components/Home';
import Leaderboard from '../components/Leaderboard';
import NewQuestion from '../components/NewQuestion'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  let username=(store.user.loggedInAs)?store.user.loggedInAs:""
  return {
    loggedInUser: username
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

class App extends Component {

  render() {
    if(this.props.loggedInUser){
        return (
          <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/leaderboard"  component={Leaderboard} />
              <Route path="/new-question"  component={NewQuestion} />
          </Switch>
        )
      }
      else {
        return( <Redirect to="/login" />)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
