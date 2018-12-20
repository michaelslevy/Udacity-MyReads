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
    state = {
      question: null
    }
    componentWillMount () {
        this.props.getQuestions();
    }
    componentWillReceiveProps(nextProps){
      if(nextProps !== this.props){
        const { questionId } = this.props.match.params;
        const {questions} = nextProps;
        let question = questions.filter(q=>q.id===questionId)
        console.log("i will", question)
        this.setState({
          question
        })
      }
    }
   render() {
     const {question} = this.state
    //  let questionID=this.props.match.params.questionId;
    //  let question=this.props.questions.filter(q=>q.id===questionID);
     console.log("teszt", question)
     if(question!==null && question !== undefined){
       if(question.length>0){
          return (<Login {...this.props} />)
        } else {
          return(<NotFound />);
        }
     }else{
       return null
     }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionExists);
