import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

// async action creator
export function handleSetAuthedUser(id) {
  // use redux-thunk pattern because we want to make an async request
  return async (dispatch) => {
    dispatch(showLoading())
    dispatch(setAuthedUser(id));
    dispatch(hideLoading())   
  };
}
