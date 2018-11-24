import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from '../Navigation'

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    users: store.user.users
  }
  console.log(this.props);
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class Leaderboard extends Component {

   render() {
     return (
       <div id='main'>
          <Navigation home='' leaderboard='active' newquestion='' />
          <div className='container'>
            <h1 >Leaderboard</h1>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default Leaderboard;
