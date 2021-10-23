import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionContainer from '../QuestionContainer';
import AnsweredQuestionContainer from './AnsweredQuestionPage';
import UnansweredQuestionContainer from './UnansweredQuestionPage';

class QuestionPage extends Component {

  render() {
    const {id, hasAnswered} = this.props

    return (
      <div>
        <QuestionContainer 
          id={id}
          wouldYouRatherContainer={
            hasAnswered === true
            ? <AnsweredQuestionContainer id={id} />
            : <UnansweredQuestionContainer id={id} />
          }
        />
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const {id} = props.match.params

  const question = questions[id]
  if(question === null) {
      return <p>This Question doesn't exist</p>
  }

  const {optionOne, optionTwo} = question

  return {
    id,
    hasAnswered:
      optionOne.votes.includes(authedUser.id) || optionTwo.votes.includes(authedUser.id),
  }
}

export default connect(mapStateToProps)(QuestionPage)