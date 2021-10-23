import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionRightSection from './QuestionRightSection';
import RadioButton from './RadioButton';
import { handleAnswerQuestion } from '../actions/questions';
import AnsweredQuestionContainer from './AnsweredQuestionContainer';

class UnansweredQuestionContainer extends Component {

  state = {
    toAnsweredQuestion: false,
  };

  handleSubmitAnswer = (e, answer) => {
    e.preventDefault()
    // dispatch answer to question to store
    const { dispatch, id} = this.props
    dispatch(handleAnswerQuestion(answer, id))
    this.setState({ toAnsweredQuestion: true})
  }

  render() {
    const {options, id} = this.props
    const { toAnsweredQuestion } = this.state

    return (
      toAnsweredQuestion === true
      ? <AnsweredQuestionContainer id={id} />
      :
      <QuestionRightSection 
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