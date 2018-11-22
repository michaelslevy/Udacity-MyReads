const initialState = {
  loading: false,
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

    default:
      return state
  }
}

export default questions;
