import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../actions/questions' //combine user actions into a single object
import NotFound from '../components/NotFound'
import Login from '../components/login/Login';


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    questions: store.questions.questions
  }
}

  //function passed to Reduxes Connect to dispatch to props
  const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => dispatch(getQuestions())
    }
  }

  class QuestionExists extends Component {
    componentWillMount () {
        this.props.getQuestions();
    }

   render() {
     let questionID=this.props.match.params.questionId;
     let question=this.props.questions.filter(q=>q.id===questionID);
     console.log(question)
     if(question.length>0){
        return (<Login {...this.props} />)
      } else {
        return(<NotFound />);
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionExists);
