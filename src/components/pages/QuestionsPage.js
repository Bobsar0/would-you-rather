import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionContainer from '../QuestionContainer';
import ViewPollContainer from '../ViewPollContainer';

class QuestionsPage extends Component {
  state = {
    isAnsweredTab: false,
  };

  handleClick = (e, isAnsweredTab) => {
    e.preventDefault();

    console.log('clicking btn data 1: ', isAnsweredTab);

    this.setState({
      isAnsweredTab,
    });
  };

  render() {

    const { questionIdsAnswered, questionIdsUnanswered } = this.props;
    const { isAnsweredTab } = this.state;

    const questionIds =
      isAnsweredTab === true ? questionIdsAnswered : questionIdsUnanswered;

    return (
      <div className='container'>
        <div class="ui buttons fluid header">
          <button class="ui button" onClick={(e) => this.handleClick(e, false)}>
            Unanswered
          </button>
          <div class="or"></div>
          <button class="ui button" onClick={(e) => this.handleClick(e, true)}>
            Answered
          </button>
        </div>
          {questionIds.map((id) => (
            <QuestionContainer
              id={id} 
              wouldYouRatherContainer={<ViewPollContainer button={<button className="btn">View Poll</button>}/>}
            />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {

  const { uid } = authedUser.id

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const questionIdsAnswered = questionIds.filter(
    (id) =>
      questions[id].optionOne.votes.includes(uid) ||
      questions[id].optionTwo.votes.includes(uid)
  );

  const questionIdsUnanswered = questionIds.filter(
    (id) =>
      !questions[id].optionOne.votes.includes(uid) &&
      !questions[id].optionTwo.votes.includes(uid)
  );

  return {
    questionIdsAnswered,
    questionIdsUnanswered,
  };
}

export default connect(mapStateToProps)(QuestionsPage);
