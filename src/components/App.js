import '../App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar'
import Login from './pages/Login';
import QuestionsPage from './pages/QuestionsPage';
import NewQuestion from './pages/NewQuestion';
import QuestionPage from './pages/QuestionPage';
import Nav from './Nav';
import Auth from './Auth';
import LeaderboardPage from './pages/LeaderboardPage';

class App extends Component {
  componentDidMount() {
    // dispatch the invocation of the handleInitialData action creator
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App container">
            <Nav />
            {this.props.loading === true 
              ? null
              : <div>
                  <Route path='/' exact component={Auth(QuestionsPage)} />
                  <Route path='/questions/:id' component={Auth(QuestionPage)} />
                  <Route path='/add' component={Auth(NewQuestion)} />
                  <Route path='/leaderboard' component={Auth(LeaderboardPage)} />
                  <Route path='/login' component={Login} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

// only render page once data is loaded
function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar.default === 1
  };
}

export default connect(mapStateToProps)(App);
