import {_getUsers} from '../utils/api';

const requestUsers = users => ({
  type: 'user/REQUESTED'
});

const requestUsersSuccess = users => ({
  type: 'user/RECEIVED',
  users
});

const requestUsersFailure = err => ({
  type: 'user/FAILURE',
  err
});

export const login = user => ({
  type: 'user/LOGIN',
  user
});

export const logout = user => ({
  type: 'user/LOGOUT'
});

//uses middleware to perform api call
//because action itself must be a pure function
//after getting the data, it dispatches the action to update the store
export const getUsers = () => {
  return (dispatch) => {

    //sets loading user state
    dispatch(requestUsers);

    //perform API call
    _getUsers().then(users => {
      //if successful disatch requestUserSuccess updates Store
      dispatch(requestUsersSuccess(Object.values(users)));
    }).catch(error => {
      //if error disatch requestUsersFailure updates Store
      dispatch(requestUsersFailure(error));
    });

  }
}
