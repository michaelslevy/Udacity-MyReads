import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

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
          <h1 >Leaderboard</h1>

       </div>
     );
  }
}

//connects Login component to store
export default Leaderboard;
