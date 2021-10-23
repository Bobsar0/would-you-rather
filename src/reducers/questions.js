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
      const { optionOne, optionTwo } = state[id]

      // add or remove username based on whether they voted the question
      const optionOneVotes = optionOne.votes.includes(authedUser.id)
        ? optionOne.votes.filter((uid) => uid !== authedUser.id)
        : optionOne.votes.concat(authedUser.id)

      const optionTwoVotes = state[id].optionTwo.votes.includes(authedUser.id)
        ? optionTwo.votes.filter((uid) => uid !== authedUser.id)
        : optionTwo.votes.concat(authedUser.id)

      return  {
        ...state,
        //get question with the id of whatever we're passing into action id to be a new object
        [id]: {
          ...state[id],
          optionOne: answer === optionOne.text
            ? { ...optionOne, votes: optionOneVotes}
            : optionOne,
          optionTwo: answer === optionTwo.text
            ? { ...optionTwo, votes: optionTwoVotes }
            : optionTwo
          }
      }
    }
    default:
      return state;
  }
}
