import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../../actions/questions' //combine user actions into a single object
import Navigation from '../Navigation'
import QuestionDetailUnanswered from '../home/QuestionDisplayUnanswered'
import {QuestionDetailAnswered} from '../home/QuestionDisplayAnswered'


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

  class QuestionDetail extends Component {

    constructor() {
        super();
        this.state={
          unanswered:true
        }
      }

    componentDidMount() {
        this.props.getQuestions();
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
        }
    }

   render() {
     let questionID=this.props.match.params.questionId;
     let question=this.props.questions.filter(q=>q.id===questionID);
     let authorID=question[0].author;
     let author=this.props.users.filter((user)=>user.id===authorID);

     const answerQuestion=()=>{ this.setState({unanswered:false}); }

     let QuestionDisplay;
     if(this.state.unanswered===true){
        QuestionDisplay=<QuestionDetailUnanswered answerQuestion={answerQuestion} question={question[0]} />
     } else {
        QuestionDisplay=<QuestionDetailAnswered loggedInID={this.props.loggedInAs.id} question={question[0]} />
     }

     return (
       <div id='main' className='poll'>
          <Navigation home='active' leaderboard='' newquestion='' />
          <div className='container'>
            <div className="question" id="questionBox">
                <header>{author[0].name} Asks:</header>
                <div className='body'>
                  <div className='img'>
                    <img src={author[0].avatarURL} alt={author[0].name} />
                  </div>
                  <div className='copy'>
                    <h2>Would you rather?</h2>
                    {QuestionDisplay}
                  </div>
                </div>
            </div>
          </div>
      </div>
     );
  }
}

QuestionDetail.propTypes = {
  answered: PropTypes.string,
  questionID: PropTypes.string,
  question: PropTypes.object,
  authorID: PropTypes.string,
  author: PropTypes.object,
  answerQuestion: PropTypes.fuction,
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
