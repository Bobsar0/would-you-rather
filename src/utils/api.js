import { _getQuestions, _getUsers, _saveQuestion } from './_DATA';

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}
