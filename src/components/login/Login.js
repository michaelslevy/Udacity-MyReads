import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as userActionCreators  from '../../actions/user' //combine user actions into a single object
import loadingBar from '../../ajax-loader.gif'

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
      getUsers: () => dispatch(userActionCreators.getUsers()),
      loginUser: (user) => dispatch(userActionCreators.login(user))
  }
}

  class Login extends Component {

    componentDidMount() {
      document.body.classList.add('login');
      this.props.getUsers()
   }

  loginUser = (user) => {
    this.props.loginUser(user);
    this.props.history.push("/");

  }

   render() {
     return (
       <div id='loginBox'>
          <h1 className='logo'>Would you rather?</h1>

          <div id='selectBox'>
            <div id='userSelector'>
            <div className='input'>please select user</div>
            <ul>
            {/*maps state to drop down list*/}
            {this.props.users && this.props.users.length ?
              this.props.users.map((user, i) => {
                return <li onClick={() => this.loginUser(user)} key={i}><img src={user.avatarURL} align='absmiddle' alt={user.name} />{user.name}</li>
              })
            : <li className='loading' ><img src={loadingBar} alt='Loading..' /></li>}
            </ul>

            </div>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Login);
