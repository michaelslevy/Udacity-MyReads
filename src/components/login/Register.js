import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link, Router } from 'react-router-dom';
import LoginTabs from './LoginTabs'
import * as userActionCreators  from '../../actions/user' //combine user actions into a single object

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    users: store.user.users
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    //getPeople is a function that returns users
    //getUser is a user action that that connects to Thunk middleware
      getPeople: () => dispatch(userActionCreators.getUsers()),
      loginUser: () => dispatch(userActionCreators.login())
  }
}

class Register extends Component {
  componentDidMount() {
    document.body.classList.add('login');
    this.props.getPeople()
  }

  loginUser = (user) => {
    this.props.loginUser(user);
  }

   render() {
     return (
       <div id='loginBox'>
          <h1 className='logo'>Would you rather?</h1>
          <div id='selectBox'>
            <LoginTabs login='' register='active' />
            <form>
              <input type='text' placeholder='username'/>
              <button>Add User</button>
            </form>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Register);
