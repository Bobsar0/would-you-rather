import '../App.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar'
import Login from './pages/Login';
import QuestionsPage from './pages/QuestionsPage';
import UnansweredQuestionPage from './pages/UnansweredQuestionPage';
import ResultContainer from './ResultContainer';
import AnsweredQuestionPage from './pages/AnsweredQuestionPage';

class App extends Component {
  componentDidMount() {
    // dispatch the invocation of the handleInitialData action creator
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="App container">
          {/* <header className="App-header">
          </header> */}
          {this.props.loading === true ? null : <AnsweredQuestionPage id='8xf0y6ziyjabvozdd253nd'/>}
          {/* {this.props.loading === true ? null : <ResultContainer/>} */}
        </div>
      </Fragment>
    );
  }
}

// Only display login once initial data is loaded
function mapStateToProps({ users }) {
  return {
    // loading: authedUser === null
    loading: users.length === 0,
  };
}

// add connect to have access to dispatch
export default connect(mapStateToProps)(App);
