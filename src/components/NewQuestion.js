import React, { Component } from 'react';
import PropTypes from 'prop-types';
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



class NewQuestion extends Component {

   render() {
     return (
       <div id='main'>
          <h1 >New Question</h1>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
