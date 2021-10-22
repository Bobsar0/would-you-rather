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
      optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser),
    // selectedOption:
  };
}

export default function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
