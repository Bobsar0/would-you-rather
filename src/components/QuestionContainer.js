import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card} from 'semantic-ui-react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
import { formatQuestion, formatQuestionDisplay } from '../utils/helpers';
import ViewPollContainer from './ViewPollContainer';

class QuestionContainer  extends Component {

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


  render() {
    const {id, authorName,
    optionOneText,
    optionTwoText,
    optionOneVotes,
        optionTwoVotes,
    avatarUrl,
    hasAnswered} = this.props.question

    return (
      <Segment.Group key={id}>
        <Segment as='h3' color='green'>{authorName} asks</Segment>
          <Segment>
            <Grid relaxed='very' divided>
              <Grid.Row>
                <Grid.Column width={5}>
                    <img src={avatarUrl} alt={`Avatar of {name}`} className='avatar-large'/>
                </Grid.Column>
                <Grid.Column width={10}>
                  <ViewPollContainer />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
      </Segment.Group>
    )
  }
}

// state {authedUser, users, tweets} is coming from redux store
// id is a prop to be passed to the Question component whenever it's called
function mapStateToProps({authedUser, users, questions}, {id}) {
  authedUser = 'tylermcginnis'
  const question = questions[id]
  // const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    question: question
    ? formatQuestionDisplay(question, users[question.author], authedUser) 
    : null
  }
}

export default connect(mapStateToProps)(QuestionContainer)