import { getInitialData } from '../utils/api';
import { getUsers } from './users';
import { getQuestions } from './questions';
// import { setAuthedUser } from '../actions/authedUser'

// let AUTHED_ID = '';

export function handleInitialData() {
  // use redux-thunk pattern because we want to make an async request
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    // add users and questions to initial state of our redux store
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
    // dispatch(setAuthedUser(AUTHED_ID))
  };
}
