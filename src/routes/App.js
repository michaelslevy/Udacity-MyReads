import React, { Component } from 'react';
import Home from '../components/home/Home';
import QuestionDetail from '../components/home/QuestionDetail';
import Leaderboard from '../components/leaderboard/';
import NewQuestion from '../components/newQuestion'
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

document.body.classList.remove('login');

class App extends Component {

  render() {
    if(this.props.loggedInUser){
        return (
          <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/leaderboard"  component={Leaderboard} />
              <Route path="/add"  component={NewQuestion} />
              <Route path="/questions/:questionId" component={QuestionDetail} />
          </Switch>
        )
      }
      else {
        return( <Redirect to="/login" />)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
