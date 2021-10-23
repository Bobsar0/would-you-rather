import React, { Component } from 'react';
import { connect } from 'react-redux'
import ViewPollContainer from '../ViewPollContainer';
import RadioButton from '../RadioButtonContainer';
import { handleAnswerQuestion } from '../../actions/questions';

class UnansweredQuestionContainer extends Component {


  handleSubmitAnswer = (e, answer) => {
    e.preventDefault()
    // dispatch answer to question to store
    const { dispatch, id} = this.props
    dispatch(handleAnswerQuestion(answer, id))
    // go to viewAnsweredQuestion
  }

  render() {
    const {options} = this.props

    return (
      <ViewPollContainer 
        content={
          <RadioButton options={options} handleSubmit={this.handleSubmitAnswer}/>
        }
      />
    )
  }
}

function mapStateToProps({ questions }, {id}) {
  const question = questions[id]

  return {
    options: question 
      ? [
          {label: question.optionOne.text, value: 'optionOne'},
          {label: question.optionTwo.text, value: 'optionTwo'}
        ]
      : []
  }
}

export default connect(mapStateToProps)(UnansweredQuestionContainer)