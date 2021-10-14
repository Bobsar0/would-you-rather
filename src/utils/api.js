import { _getQuestions, _getUsers } from './_DATA';

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers, _getQuestions]);
  return {
    users,
    questions,
  };
}
