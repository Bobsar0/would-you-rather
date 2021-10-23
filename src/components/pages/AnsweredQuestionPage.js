import React, { Component } from 'react';
import { connect } from 'react-redux'
import ViewPollContainer from '../ViewPollContainer';
import ResultContainer from '../ResultContainer';

class AnsweredQuestionContainer extends Component {

  render() {
    const {options, totalVotes, authedUser} = this.props

    return (
        <ViewPollContainer
        headerText='Results:'
          content={
            options.map((option) => 
              <ResultContainer 
                option={option} 
                totalVotes={totalVotes}
                isVoted={option.votes.includes(authedUser.id)} 
              />
            )
          }
        />
    )
  }
}

function mapStateToProps({authedUser, questions}, {id}) {
  const question = questions[id]
  const {optionOne, optionTwo} = question

  return {
    authedUser,
    options: question 
      ? [ optionOne, optionTwo ]
      : [],
    totalVotes: question 
      ? optionOne.votes.length + optionTwo.votes.length
      : 0
  }
}

export default connect(mapStateToProps)(AnsweredQuestionContainer)