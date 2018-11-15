import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout }  from '../actions/user'
import { Redirect } from 'react-router-dom'


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
      logout: () => dispatch(logout())
  }
}



class Navigation extends Component {

  logoutUser = () => {
    this.props.logout();
  }

  render(){
    return (
      <header className='layout'>
        <div className='container'>
        <span className='logo'>
          Would You Rather?
        </span>
        <nav className='primaryMenu'>
          <Link
            to='/'
            className={this.props.home}
          >Home</Link>
          <Link
            to='/leaderboard'
            className={this.props.leaderboard}
          >Leaderboard</Link>
          <Link
            to='/new-question'
            className={this.props.newquestion}
          >New Question</Link>
          <button onClick={(e) => this.logoutUser()}>Logout</button>
        </nav>
          </div>
        </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
