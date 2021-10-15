import '../App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './pages/Login';
import QuestionsPage from './pages/QuestionsPage';

class App extends Component {
  componentDidMount() {
    // dispatch the invocation of the handleInitialData action creator
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App container">
        {/* <header className="App-header">
        </header> */}
        {
          this.props.loading === true 
            ? null 
            : <LoginPage />
        }
      </div>
    );
  }
}

// Only display login once initial data is loaded
function mapStateToProps({ users }) {
  return {
    // loading: authedUser === null
        loading: users.length === 0
  }
}

// add connect to have access to dispatch
export default connect(mapStateToProps)(App);
