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

    validateForm=()=>{
      let l1=document.getElementById('optionOneInput').value.length;
      let l2=document.getElementById('optionTwoInput').value.length;
      (l1>1 && l2>1)?this.setState({disabled:""}):this.setState({disabled:"disabled"});
    }

    saveQuestion=(e)=>{

      (this.state.disabled==="disabled")?
      alert("disabled"):
      alert("saving question");
      e.preventDefault();
    }

   render() {

     return (
       <div id='main'>
          <Navigation home='' leaderboard='' newquestion='active' />
          <div className='container'>
            <h1>New Question</h1>
            <h2>Would you rather?</h2>
            <form id='questionForm' className={this.state.disabled}>
              <input placeholder='Option one' id='optionOneInput' onChange={()=>this.validateForm()}  />
              <input placeholder='Option two' id='optionTwoInput' onChange={()=>this.validateForm()} />
              <button className='submit' onClick={(e)=>this.saveQuestion(e)} >Submit</button>
            </form>
          </div>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
