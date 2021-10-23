import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

export default function(Component) {

  class Auth extends React.Component {

    render() {
      return this.props.isAuthenticated
      ? <Component {...this.props}/> 
      : <Redirect to='/login' />
    }
  }

  function mapStateToProps({ authedUser }) {
    return { isAuthenticated: authedUser !== null };
  }

  return connect(mapStateToProps)(Auth)
}


