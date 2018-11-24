import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions, saveQuestionAnswer }  from '../../actions/questions' //combine user actions into a single object
import {getUsers}  from '../../actions/user' //combine user actions into a single object
import Question from "./Question"
import Navigation from '../Navigation'
import HomeTabs from '../home/HomeTabs'

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    users: store.user.users,
    loggedInAs: store.user.loggedInAs
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
      getQuestions: () => dispatch(getQuestions()),
      saveQuestionAnswer:(authedUser, qid, answer)=>dispatch(saveQuestionAnswer(authedUser, qid, answer))
  }
}

  class QuestionDetailUnanswered extends Component {

     answerQuestion = (answer) => {
       let questionID=this.props.question.id;
       let loggedinID=this.props.loggedInAs.id;

       saveQuestionAnswer(loggedinID, questionID, answer);
     }


   render() {
     let optionOne=this.props.question.optionOne.text;
     let optionTwo=this.props.question.optionTwo.text;

     return (
          <div className='QuestionDisplay'>
            <p><button onClick={()=>this.answerQuestion("optionOne")} className='answer'> {optionOne}</button></p>
            <p><button onClick={()=>this.answerQuestion("optionTwo")} className='answer'> {optionTwo}</button></p>;
         </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailUnanswered);
