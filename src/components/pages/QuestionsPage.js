import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import QuestionContainer from '../QuestionContainer';

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
      console.log('idsssss: ', questionIds)

      // <div class="ui buttons"><button class="ui button">Cancel</button><div class="or"></div><button class="ui positive button">Save</button></div>
    return (
      <div>
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
            <QuestionContainer id={id} />
          ))}
      </div>
    );
  }
}

// takes in the state of our store, sorts the tweets by timestamp and return an object that has the tweets property id on it
// uses destructuring to get only the needed tweets slice from the store
function mapStateToProps({ questions, authedUser }) {
  //todo: remove authedUser
    authedUser = 'tylermcginnis'
      console.log('questonsssss: ', questions)

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
      console.log('idsssss in map: ', questionIds)

  const questionIdsAnswered = questionIds.filter(
    (id) =>
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser)
  );

  const questionIdsUnanswered = questionIds.filter(
    (id) =>
      !questions[id].optionOne.votes.includes(authedUser) &&
      !questions[id].optionTwo.votes.includes(authedUser)
  );

  return {
    questionIdsAnswered,
    questionIdsUnanswered,
  };
}

export default connect(mapStateToProps)(QuestionsPage);
