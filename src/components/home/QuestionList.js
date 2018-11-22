import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getQuestions}  from '../../actions/questions' //combine user actions into a single object
import Question from "./Question"

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

  class QuestionList extends Component {

    componentDidMount() {
      this.props.getQuestions()
   }

   render() {

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
