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
    users: store.user.users
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
      getQuestions: () => dispatch(getQuestions())
  }
}

  class QuestionDetail extends Component {

    componentDidMount() {
      this.props.getQuestions()
   }

     answerQuestion = (option) => {
       alert(option);
      // this.props.loginUser(user);
       //this.props.history.push("/");

     }


   render() {
     let questionID=this.props.match.params.questionId;
     let question=this.props.questions.filter(q=>q.id===questionID);
     let authorID=question[0].author;
     let author=this.props.users.filter((user)=>user.id==authorID);
     let optionOne=question[0].optionOne.text;
     let optionTwo=question[0].optionTwo.text;

     return (
       <div id='main' className='poll'>
          <Navigation home='active' leaderboard='' newquestion='' />
          <div className='container'>
            <div className="question" id="questionBox">
                <header>{author[0].name} Asks:</header>
                <div className='body'>
                  <div className='img'>
                    <img src={author[0].avatarURL}/>
                  </div>
                  <div className='copy'>
                    <h2>Would you rather?</h2>
                    <p><button onClick={()=>this.answerQuestion(1)} className='answer'> {optionOne}</button></p>
                    <p><button onClick={()=>this.answerQuestion(2)} className='answer' > {optionTwo}</button></p>
                  </div>
                </div>
            </div>
          </div>
      </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
