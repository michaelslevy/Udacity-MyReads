const initialState = {
  loading: true,
  questions: []
}

const questions = (state = initialState, action) => {
  switch (action.type) {

    case "questions/REQUESTED":
      return {
        ...state,
        loading: true,
        error:false,
        questions:[]
      }

    case "questions/SUCCESS":
      return {
        ...state,
        loading: false,
        questions: action.questions,
        error:false
      }

    case "questions/FAILURE":
      return {
        ...state,
        loading: false,
        questions:[],
        error: action.error
      }

    case "questions/APPEND":
        console.log(action);
        return {
          ...state,
          loading:false,
          questions: [...state.questions, action.question],
          error:false
        }

    default:
      return state
  }
}

export default questions;
