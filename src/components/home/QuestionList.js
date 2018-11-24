import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../../actions/questions' //combine user actions into a single object
import Question from "./Question"
import {getUsers}  from '../../actions/user' //combine user actions into a single object

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    questions: store.questions.questions,
    loggedInAs: store.user.loggedInAs
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
      getQuestions: () => dispatch(getQuestions())
  }
}

  class QuestionList extends Component {

    componentDidMount() {
      this.props.getQuestions()
   }

   render() {
     let userID=this.props.loggedInAs.id;
     let questionsFiltered;
     if(this.props.display=="Unanswered"){
       questionsFiltered=this.props.questions.filter(q=>q.optionOne.votes.includes(userID)===false && q.optionTwo.votes.includes(userID)==false);
     } else {
       questionsFiltered=this.props.questions.filter(q=>q.optionOne.votes.includes(userID) || q.optionTwo.votes.includes(userID));
     }

     let list;

     if(questionsFiltered && questionsFiltered.length>0) {
       list=questionsFiltered.map((question) => {
         return <Question key={question.id} question={question} />
       })
     } else {
       list=<div className="question">Not found..</div>;
     }

     return (
            <div id="questionBox">
              {list}
            </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
