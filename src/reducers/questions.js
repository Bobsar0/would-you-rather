import { ANSWER_QUESTION, GET_QUESTIONS } from '../actions/questions';

// users reducer which modifies the state of the users object based on a dispatched action
// returns a new state
export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION: {
      const { answer, authedUser, id} = action

      return  {
        ...state,
        //get question with the id of whatever we're passing into action id to be a new object
        [id]: {
          ...state[id],
          // add or remove username based on whether they have answered the question
          optionOne: answer === state[id].optionOne.text
            ? {
                ...state[id].optionOne,
                votes: state[id].optionOne.votes.includes(authedUser)
                  ? state[id].optionOne.votes.filter((uid) => uid !== action.authedUser)
                  : state[action.id].optionOne.votes.concat(authedUser)
              }
            : state[id].optionOne,
          optionTwo: answer === state[id].optionTwo.text
            ? {
                ...state[id].optionTwo,
                votes: state[id].optionTwo.votes.includes(authedUser)
                ? state[id].optionTwo.votes.filter((uid) => uid !== action.authedUser)
                : state[action.id].optionTwo.votes.concat(authedUser)
              }
            : state[id].optionTwo
          }
      }
    }
    default:
      return state;
  }
}
