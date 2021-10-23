import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionContainer from '../QuestionContainer';
import AnsweredQuestionContainer from '../AnsweredQuestionContainer';
import UnansweredQuestionContainer from '../UnansweredQuestionContainer';
import NotFoundPage from './NotFoundPage';

class QuestionPage extends Component {
  static routeName = '/questions/:id';

  render() {
    const {id, hasAnswered} = this.props

    if(hasAnswered === null) {
      return <NotFoundPage message="Question not found" />
    }

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

  return {
    id,
    hasAnswered: question 
      ? question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id)
      : null
  }
}

export default connect(mapStateToProps)(QuestionPage)