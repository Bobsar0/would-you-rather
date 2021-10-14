export const GET_QUESTIONS = 'GET_QUESTIONS';

// action creator
export function getQuestions(questions) {
  // return the action with the type of GET_QUESTIONS
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
