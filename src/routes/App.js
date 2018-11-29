import React, { Component } from 'react';
import Home from '../components/home/Home';
import QuestionDetail from '../components/home/QuestionDetail';
import Leaderboard from '../components/leaderboard/Leaderboard';
import NewQuestion from '../components/newQuestion/NewQuestion'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NotFound from '../components/NotFound'

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
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/questions/:questionId" exact component={QuestionDetail} />
              <Route component={NotFound} />

          </Switch>
        )
      }
      else {
        return( <Redirect to="/login" />)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
