import { getInitialData } from '../utils/api';
import { getUsers } from './users';
import { getQuestions } from './questions';
// import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

// let AUTHED_ID = 'sarahedo';

// action that uses redux thunk pattern (cos asynchronous request is made inside) to dispatch initial data received from database to the redux store
export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
    dispatch(hideLoading());
  };
}
