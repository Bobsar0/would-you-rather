import { GET_QUESTIONS } from '../actions/questions';

// users reducer which modifies the state of the users object based on a dispatched action
// returns a new state
export default function users(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
