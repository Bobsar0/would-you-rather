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
// '8xf0y6ziyjabvozdd253nd': {
//   id: '8xf0y6ziyjabvozdd253nd',
//   author: 'sarahedo',
//   timestamp: 1467166872634,
//   optionOne: {
//     votes: ['sarahedo'],
//     text: 'have horrible short term memory',
//   },
//   optionTwo: {
//     votes: [],
//     text: 'have horrible long term memory',
//   },
// },

//   johndoe: {
//   id: 'johndoe',
//   name: 'John Doe',
//   avatarURL:
//     'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Wayfarers&facialHairType=BeardMajestic&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=Angry&mouthType=Default&skinColor=Brown',
//   answers: {
//     xj352vofupe1dqz9emx13r: 'optionOne',
//     vthrdm985a262al8qx3do: 'optionTwo',
//     '6ni6ok3ym7mf1p33lnez': 'optionTwo',
//   },
//   questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
// },
