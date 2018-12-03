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

      case "questions/UPDATEANSWER":

        let qid=action.answer.qid;
        let answer=action.answer.answer;
        let authedUser=action.answer.authedUser

        let newQuestions=[...state.questions];
        for (let i=0; i<newQuestions.length; i++ ){
          if(newQuestions[i].id===qid){
            let votes=newQuestions[i][answer]['votes'];
            newQuestions[i][answer]['votes']=[...votes,authedUser]
            console.log(newQuestions[i][answer]);
          }
        }
        //console.log(newQuestions);
        return {
          ...state,
          loading: false,
          questions:newQuestions,
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
