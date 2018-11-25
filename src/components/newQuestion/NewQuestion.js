import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from '../Navigation'
import {saveQuestion }  from '../../actions/questions' //combine user actions into a single object
import  { Redirect } from 'react-router-dom'

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
    saveQuestion: (question) => dispatch(saveQuestion(question)),
  }
}

class NewQuestion extends Component {

    constructor(props) {
      super(props);
      this.state={
        disabled:"disabled",
        error:''
      }
    }

    validateForm=()=>{
      //check if both fields have entries
      let l1=document.getElementById('optionOneInput').value.length;
      let l2=document.getElementById('optionTwoInput').value.length;
      (l1>1 && l2>1)?this.setState({disabled:"", error:''}):this.setState({disabled:"disabled", error:''});
    }

    saveQuestion=(e)=>{

      e.preventDefault();

      //gather form information
      let author=this.props.loggedInUser.id;
      let optionOneText=document.getElementById('optionOneInput').value;
      let optionTwoText=document.getElementById('optionTwoInput').value;
      let question={optionOneText,optionTwoText,author};

      //submit form if form is enabled
      if(this.state.disabled==="disabled"){
        this.setState({error: "Add both questions to continue."})
      } else {
        this.props.saveQuestion(question);
        
      }

    }

   render() {

     return (
       <div id='main'>
          <Navigation home='' leaderboard='' newquestion='active' />
          <div className='container'>
            <h1>New Question</h1>
            <div id="questionBox">
              <form id='questionForm' className={this.state.disabled}>
                <h2>Would you rather?</h2>
                <p className='error'>{this.state.error}</p>
                <p id='explainer'>Both fields are required.</p>
                <input placeholder='Option one' id='optionOneInput' onChange={()=>this.validateForm()}  />
                <input placeholder='Option two' id='optionTwoInput' onChange={()=>this.validateForm()} />
                <button className='submit' onClick={(e)=>this.saveQuestion(e)} >Submit</button>
              </form>
              </div>
          </div>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
