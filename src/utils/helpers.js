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
    // selectedOption:
  };
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function unCapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}