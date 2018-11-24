import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from '../Navigation'

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

    constructor(props) {
      super(props);
      this.state={
        disabled:"disabled"
      }
    }

    saveQuestion=()=>{
      alert("saving question");
    }

   render() {

     return (
       <div id='main'>
          <Navigation home='' leaderboard='' newquestion='active' />
          <div className='container'>
            <h1>New Question</h1>
            <h2>Would you rather?</h2>
            <form id='questionForm' className={this.state.disabled}>
              <input placeholder='Option one' id='optionOneInput'  />
              <input placeholder='Option two' id='optionTwoInput'  />
              <button className='submit' onClick={()=>this.saveQuestion()} >Submit</button>
            </form>
          </div>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
