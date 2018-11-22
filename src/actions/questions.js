import {_getQuestions} from '../utils/api';

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
      dispatch(requestQuestionsSuccess(questions));
    }).catch(error => {
      //if error disatch requestUsersFailure updates Store
      dispatch(requestQuestionsFailure(error));
    });

  }
}
