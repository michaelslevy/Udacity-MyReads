const initialState = {
  loading: false,
  users: []
}

const users = (state = initialState, action) => {
  switch (action.type) {

    case "user/REQUESTED":
      return {
        ...state,
        loading: true,
        error:false,
        users:[]
      }

    case "user/RECEIVED":
    console.log('inside reducer received users', action)
      return {
        ...state,
        loading: false,
        //users: state.users.concat(...action.users),
        users: action.users,
        error:false
      }

    case "user/FAILURE":
      return {
        ...state,
        loading: false,
        users:[],
        error: action.error
      }

    case "user/LOGIN":
      return {
        ...state,
        loggedInAs:action.user
      }

    default:
      return state
  }
}

export default users;
