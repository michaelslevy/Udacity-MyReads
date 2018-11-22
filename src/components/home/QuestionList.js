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

     let questionsAnswerd=this.props.questions.filter(q=>q.optionOne.votes.includes("sarahedo") || q.optionTwo.votes.includes(userID))
     let questionsUnanswerd=this.props.questions.filter(q=>q.optionOne.votes.includes("sarahedo")===false && q.optionTwo.votes.includes(userID)==false)

     console.log(questionsAnswerd.length, questionsUnanswerd.length)

     return (
            <div id="questionBox">
            {this.props.questions && this.props.questions.length ?
              this.props.questions.map((question) => {
                return <Question key={question.id} question={question} />
              })
            :<div className="question">Loading</div>}
            </div>

     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
