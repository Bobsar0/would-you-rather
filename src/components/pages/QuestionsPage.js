import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionContainer from '../QuestionContainer';
import ViewPollContainer from '../ViewPollContainer';

class QuestionsPage extends Component {
  state = {
    isAnsweredTab: false,
  };

  handleClick = (e, isAnsweredTab) => {
    e.preventDefault();
    this.setState({ isAnsweredTab });
  };

  handleViewQuestion = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/questions/${id}`)
  };

  render() {
    const { questions, questionIdsAnswered, questionIdsUnanswered } = this.props;
    const { isAnsweredTab } = this.state;

    const questionIds =
      isAnsweredTab === true ? questionIdsAnswered : questionIdsUnanswered;
    
    const noQuestionsText = isAnsweredTab === true
      ? 'You have not answered any questions.'
      : 'You have answered all questions.'

    return (
      <div className='container'>
        <div className="ui buttons fluid header">
          <button 
            className={`ui button ${ !isAnsweredTab ? "active" : "" }`} 
            onClick={(e) => this.handleClick(e, false)}>
            Unanswered
          </button>
          <div className="or"></div>
          <button 
            className={`ui button ${ isAnsweredTab ? "active" : "" }`} 
            onClick={(e) => this.handleClick(e, true)}>
            Answered
          </button>
        </div>
          { questionIds.length === 0
              ? <p>{noQuestionsText}</p>
          
              : questionIds.map((qid) => (
                <QuestionContainer
                  key={qid} id={qid} 
                  wouldYouRatherContainer={
                    <ViewPollContainer 
                    content={
                      <div>
                        <p><em>{ questions[qid].optionOne.text }</em> OR ...</p>
                        <button className="btn" onClick={(e) => this.handleViewQuestion(e, qid)}>View Poll</button>
                      </div>
                    }
                    />
                  }
                />
              ))
          }
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {

  const { id } = authedUser

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const questionIdsAnswered = questionIds.filter(
    (qid) =>
      questions[qid].optionOne.votes.includes(id) ||
      questions[qid].optionTwo.votes.includes(id)
  );

  const questionIdsUnanswered = questionIds.filter(
    (qid) =>
      !questions[qid].optionOne.votes.includes(id) &&
      !questions[qid].optionTwo.votes.includes(id)
  );

  return {
    questionIdsAnswered,
    questionIdsUnanswered,
    questions 
  };
}

export default withRouter(connect(mapStateToProps)(QuestionsPage));
