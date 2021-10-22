import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionContainer from '../QuestionContainer';
import ViewPollContainer from '../ViewPollContainer';
import ResultContainer from '../ResultContainer';

class AnsweredQuestionPage extends Component {

  render() {
    const {id, options, totalVotes, authedUser} = this.props

    return (
      <div>
        <QuestionContainer 
          id={id}
          wouldYouRatherContainer={
            <ViewPollContainer
            headerText='Results:'
              content={
                
                options.map((option) => 
                  <ResultContainer 
                    option={option} 
                    totalVotes={totalVotes}
                    isVoted={option.votes.includes(authedUser)} 
                  />
                )
              }
            />}
        />
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions}, {id}) {
  authedUser = 'sarahedo'
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

export default connect(mapStateToProps)(AnsweredQuestionPage)