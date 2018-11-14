import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import LoginTabs from './LoginTabs'
import * as userActionCreators  from '../actions/user' //combine user actions into a single object

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

class Login extends Component {
  componentDidMount() {
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
            <LoginTabs login='active' register='' />
            <div id='userSelector'>
            <div className='input'>please select user</div>
            <ul>
            {/*maps state to drop down list*/}
            {this.props.users && this.props.users.length ?
              this.props.users.map((user, i) => {
                return <li onClick={() => this.loginUser(user)} key={i}><img src={user.avatarURL} align='absmiddle' />{user.name}</li>
              })
            : <li>Loading</li>}
            </ul>

            </div>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Login);