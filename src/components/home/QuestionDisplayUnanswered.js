import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../../actions/questions' //combine user actions into a single object
import {getUsers}  from '../../actions/user' //combine user actions into a single object
import Question from "./Question"
import Navigation from '../Navigation'
import HomeTabs from '../home/HomeTabs'


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    questions: store.questions.questions,
    users: store.user.users,
    loggedInAs: store.user.loggedInAs
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
      getQuestions: () => dispatch(getQuestions())
  }
}

  class QuestionDetailUnanswered extends Component {

    componentDidMount() {
      /*  this.props.getQuestions();

        //find if current user has answered questions
        let questionID=this.props.match.params.questionId;
        let question=this.props.questions.filter(q=>q.id===questionID);
        //let questionsFiltered=this.props.questions.filter(q=>q.optionOne.votes.includes("sarahedo")===false && q.optionTwo.votes.includes(userID)==false);
        let loggedinID=this.props.loggedInAs.id;

        //set the state of the component to unanswered or answered
        if(question[0].optionOne.votes.includes(loggedinID) || question[0].optionTwo.votes.includes(loggedinID)){
          this.setState({unanswered:false});
        } else {
          this.setState({unanswered:true});
        }*/
    }

     answerQuestion = (option) => {
       alert(option);
      // this.props.AnswerQuestion(questionID,userID);
      //set unanswered state;

     }


   render() {
    /* let questionID=this.props.match.params.questionId;
     let question=this.props.questions.filter(q=>q.id===questionID);
     let author=this.props.users.filter((user)=>user.id==authorID);
     let optionOne=question[0].optionOne.text;
     let optionTwo=question[0].optionTwo.text;/*/
     let optionOne='question';
     let optionTwo='question2'

     return (
          <div className='QuestionDisplay'>
            <p><button onClick={()=>this.answerQuestion(1)} className='answer'> {optionOne}</button></p>
            <p><button onClick={()=>this.answerQuestion(2)} className='answer' > {optionTwo}</button></p>;
         </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailUnanswered);
