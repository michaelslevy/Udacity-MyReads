import {_getQuestions, _saveQuestionAnswer, _saveQuestion} from '../utils/api';

const requestQuestions = users => ({
  type: 'questions/REQUESTED'
});

const requestQuestionsSuccess = questions => ({
  type: 'questions/SUCCESS',
  questions
});

const requestQuestionsFailure = err => ({
  type: 'questions/FAILURE',
  err
});

const appendNewQuestion=question=>({
  type:'questions/APPEND',
  question
})

//uses middleware to perform api call
//because action itself must be a pure function
//after getting the data, it dispatches the action to update the store
export const getQuestions = () => {
  return (dispatch) => {
    //sets loading user state
    dispatch(requestQuestions);
    //perform API call
    _getQuestions().then(questions => {
      //if successful disatch requestUserSuccess updates Store
        dispatch(requestQuestionsSuccess(Object.values(questions).sort((a,b) => b.timestamp - a.timestamp) ));
    }).catch(error => {
      //if error disatch requestUsersFailure updates Store
      dispatch(requestQuestionsFailure(error));
    });

  }
}

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    //perform API call
    _saveQuestionAnswer({authedUser, qid, answer}).then(success=>{
      getQuestions()
    }).catch(error => {
      dispatch(requestQuestionsFailure(error));
  });

  }
}

export const saveQuestion=(question)=>{
    return (dispatch) => {
        _saveQuestion(question).then(question=>{
          dispatch(appendNewQuestion(question));
        });
    }
}
