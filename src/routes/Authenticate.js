//Let's get started!
import React, { Component } from 'react';
import '../App.css';

//import modules
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//import components
import Home from '../components/home/Home';
import QuestionDetail from '../components/home/QuestionDetail';
import Leaderboard from '../components/leaderboard/Leaderboard';
import NewQuestion from '../components/newQuestion/NewQuestion'
import NotFound from '../components/NotFound'
import Login from '../components/login/Login';
import QuestionExists from './QuestionExists';

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

class Authenticate extends Component {
  render() {
  if(this.props.loggedInUser){
      return (
        <Switch>
          <Route path="/" exact  component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/leaderboard"  component={Leaderboard} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/questions/:questionId" component={QuestionDetail} />
          <Route component={NotFound} />
        </Switch>
      );
    } else {
        return (
        <Switch>
          <Route path="/" exact  component={Login} />
          <Route path="/login" render={props =>
                    (<Login
                      {...props}
                    />)} />
          <Route path="/leaderboard"  component={Login} />
          <Route path="/add" component={Login} />
          <Route path="/questions/:questionId"  component={QuestionExists} />
          <Route component={NotFound} />
        </Switch>
      )
    }

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
