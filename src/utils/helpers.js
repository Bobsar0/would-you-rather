export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatQuestionDisplay(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    id,
    timestamp,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVotes: optionOne.votes.length,
    optionTwoVotes: optionOne.votes.length,
    authorName: name,
    avatarUrl: avatarURL,
    hasAnswered:
      optionOne.votes.includes(authedUser.id) || optionTwo.votes.includes(authedUser.id),
  };
}

export function formatLeaderboardUser(user, questions) {
  const { id, name, avatarURL} = user

  return {
    name: name,
    avatarUrl: avatarURL,
    created: getCreatedQuestionsCount(id, questions),
    answered: getAnsweredQuestionsCount(id, questions),
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function unCapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


export function getPercentage(x, y) {
  const percentage = x/y * 100
  // round to 2 decimal places if necessary
  return Math.round(percentage * 100) / 100
}

export function getScore(uid, questions) {
  return getCreatedQuestionsCount(uid, questions) + getAnsweredQuestionsCount(uid, questions)
}

function getCreatedQuestionsCount(uid, questions) {
  const qids = Object.keys(questions);
  return qids.filter((qid) => questions[qid].author === uid).length
}

function getAnsweredQuestionsCount(uid, questions) {
  const qids = Object.keys(questions);

  return qids.filter((qid) => 
    questions[qid].optionOne.votes.includes(uid) 
    || questions[qid].optionTwo.votes.includes(uid))
    .length
}