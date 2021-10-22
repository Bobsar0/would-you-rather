import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

// action creator
export function getQuestions(questions) {
  // return the action with the type of GET_QUESTIONS
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

// action creator
function answerQuestion(answer, authedUser, id) {
  // return the action with the type of GET_QUESTIONS
  return {
    type: ANSWER_QUESTION,
    answer,
    authedUser, 
    id
  };
}

// async action creator responsible for invoking answerFunction
export function handleAnswerQuestion(answer, qid) {
  // return the action with the type of GET_QUESTIONS
  return async (dispatch, getState) => {
      const { authedUser } = getState()

      // use optimistic update where the action is performed on the ui and only reversed when there's an issue saving to the database
      dispatch(answerQuestion(answer, authedUser, qid));
    try{
      return await saveQuestionAnswer({
        authedUser, qid, answer
      })
    } catch (e) {
      console.warn('Error in handleAnswerQuestion: ', e)
      dispatch(answerQuestion(answer, authedUser, qid));
      alert('There was an error in answering the question. Please try again')
    }
  };
}
