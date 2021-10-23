import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import logo from '../../logo.svg';
import CustomButton from '../CustomButton';
import { handleSetAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  static routeName = '/login';

  state = {
    selectedUserId: '',
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedUserId: value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { selectedUserId } = this.state;
    const { dispatch, users } = this.props;
    dispatch(handleSetAuthedUser(users[selectedUserId]));

    this.setState({ selectedUserId: '' })
  };

  render() {
    const { selectedUserId } = this.state;
    const { authedUser, userOptions, fromRoute } = this.props;

    if(authedUser !== null) {
       return <Redirect to={fromRoute ?? '/'} />
    }

    return (
      <div className="card">
        <h2 className="center">Welcome to Would You Rather</h2>
        <h3 className="center">Please login to continue</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleLogin}>
          <Dropdown
            placeholder="Select User"
            fluid
            selection
            options={userOptions}
            value={selectedUserId}
            onChange={this.handleChange}
          />
          <CustomButton title="Login" isDisabled={selectedUserId === ''} />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  let userOptions = [];

  Object.values(users).forEach((userObj) =>
    userOptions.push({
      key: userObj.id,
      value: userObj.id,
      text: userObj.name,
      image: {
        avatar: userObj.avatarURL !== null && userObj.avatarURL !== '',
        src: userObj.avatarURL,
      },
    })
  );

  return {
    authedUser,
    userOptions,
    users
  };
}

export default connect(mapStateToProps)(Login);
