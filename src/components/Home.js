import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from './Navigation'

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



class Home extends Component {

  componentDidMount() {
    document.body.classList.remove('login');
  }

   render() {
     return (
       <div id='main'>
          <Navigation home='active' leaderboard='' newquestion='' />
          <div className='container'>
            <h1 >Welcome {this.props.loggedInUser.name}</h1>
          </div>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
