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
          <Route path="/login" exact component={Login} />
          <Route path="/" exact  component={Home} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/add" exact component={NewQuestion} />
          <Route path="/questions/:questionId" exact component={QuestionDetail} />
          <Route component={NotFound} />
        </Switch>
      );
    } else {
        return <Route  component={Login} />
    }

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
