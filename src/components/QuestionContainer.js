import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import { formatQuestionDisplay } from '../utils/helpers';
import QuestionContainerHeader from './QuestionContainerHeader';

class QuestionContainer  extends Component {

  render() {
    const { question, wouldYouRatherContainer } = this.props;

    const {id, authorName, avatarUrl} = question


    return (
      <Segment.Group key={id}>
        <QuestionContainerHeader text={`Question by ${authorName}`} />
          <Segment>
            <Grid relaxed='very' divided>
              <Grid.Row>
                <Grid.Column width={5}>
                    <img src={avatarUrl} alt={`Avatar of ${authorName}`} className='avatar-large'/>
                </Grid.Column>
                <Grid.Column textAlign='left' width={10}>
                  {wouldYouRatherContainer}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
      </Segment.Group>
    )
  }
}

// state {authedUser, users, questions} is coming from redux store
// id is a prop to be passed to the component whenever it's called
function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]

  return {
    authedUser,
    question: question
    ? formatQuestionDisplay(question, users[question.author], authedUser) 
    : null
  }
}

export default connect(mapStateToProps)(QuestionContainer)