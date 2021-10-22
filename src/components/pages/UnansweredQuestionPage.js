import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionContainer from '../QuestionContainer';
import ViewPollContainer from '../ViewPollContainer';
import { formatQuestion, formatQuestionDisplay } from '../../utils/helpers';
import RadioButton from '../RadioButtonContainer';
import { handleAnswerQuestion } from '../../actions/questions';

class UnansweredQuestionPage extends Component {


  handleSubmitAnswer = (e, answer) => {
    e.preventDefault()
    // dispatch answer to question to store
    const { dispatch, id} = this.props
    dispatch(handleAnswerQuestion(answer, id))
    // go to viewAnsweredQuestion
  }

  render() {
    const {id, options} = this.props

    return (
      <div>
        <QuestionContainer 
          id={id}
          wouldYouRatherContainer={
            <ViewPollContainer 
              content={
                <RadioButton options={options} handleSubmit={this.handleSubmitAnswer}/>
              }
            />}
        />
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions}, {id}) {
  const question = questions[id]

  return {
    authedUser,
    options: question 
      ? [
          {label: question.optionOne.text, value: 'optionOne'},{label: question.optionTwo.text, value: 'optionTwo'}
        ]
      : []
  }
}

export default connect(mapStateToProps)(UnansweredQuestionPage)