import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionRightSection from './QuestionRightSection';
import Result from './Result';

class AnsweredQuestionContainer extends Component {

  render() {
    const {qid, options, totalVotes, authedUser} = this.props

    return (
        <QuestionRightSection
        headerText='Results:'
          content={
            options.map((option) => 
              <Result
                key={`${qid} ${option.text}`} 
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
    qid: id,
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