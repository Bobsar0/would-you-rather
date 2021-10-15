import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react';
import logo from '../../logo.svg';
import CustomButton from '../CustomButton';
import { handleSetAuthedUser } from '../../actions/authedUser'


class Login extends Component {
  state = {
    selectedUserId: ''
  }

  handleChange = (event, data) => {
    this.setState({
      selectedUserId: data.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { selectedUserId } = this.state
    console.log('selected', this.state.selectedUserId)
    // SET_AUTHED_USER in store
    const { dispatch } = this.props

    dispatch(handleSetAuthedUser(selectedUserId))
  }

  render() {
    console.log('props:', this.props)
    const { selectedUserId } = this.state
    const { userOptions } = this.props

    // redirect to the Questions page when submitted

    return (
      <div className='card'>
        <h2 className='center'>Welcome to Would You Rather</h2>
        <h3 className='center'>Please login to continue</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleLogin}>
          <Dropdown
            placeholder='Select User'
            fluid
            selection
            options={userOptions}
            value={selectedUserId}
            onChange={this.handleChange}
          />
        <CustomButton title='Login' isDisabled={selectedUserId === ''} />
        </form>
      </div>
    )
  }
}


// takes in the state of our store, sorts the tweets by timestamp and return an object that has the tweets property id on it
// uses destructuring to get only the needed tweets slice from the store
function mapStateToProps({ users }) {
  let userOptions = []

  Object.values(users).forEach((userObj) => 
    userOptions.push({
      key: userObj.id,
      value: userObj.id,
      text: userObj.name,
      image: {
        avatar: userObj.avatarURL !== null && userObj.avatarURL !== '',
        src: userObj.avatarURL
      }
    })
  )

  return {
    userOptions
  }
}

export default connect(mapStateToProps)(Login)