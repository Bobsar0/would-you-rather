import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}

// async action creator
export function handleSetAuthedUser(user) {
  // use redux-thunk pattern because we want to make an async request
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(user));
    dispatch(hideLoading());
  };
}
