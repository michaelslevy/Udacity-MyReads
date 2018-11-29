import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../../actions/questions' //combine user actions into a single object
import Question from "./Question"
import loadingBar from '../../ajax-loader.gif'

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    loading:store.questions.loading,
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
      this.props.getQuestions();
   }

   render() {
     let userID=this.props.loggedInAs.id;
     let questionsFiltered=[];
     if(this.props.display==="Unanswered"){
       questionsFiltered=this.props.questions.filter(q=>q.optionOne.votes.includes(userID)===false && q.optionTwo.votes.includes(userID)===false);
     } else {
       questionsFiltered=this.props.questions.filter(q=>q.optionOne.votes.includes(userID) || q.optionTwo.votes.includes(userID));
     }

     let list;

     if(this.props.loading===true){
        list=<div className="question"><img src={loadingBar} className='' alt='loading...' /></div>;
     } else if(questionsFiltered && questionsFiltered.length>0) {
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

QuestionList.propTypes = {
  userID: PropTypes.string,
  questionsFiltered: PropTypes.array,
  list:PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
