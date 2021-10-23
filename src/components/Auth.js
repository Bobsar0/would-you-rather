import React from 'react'
import { connect } from 'react-redux';
import Login from './pages/Login';

export default function(Component) {

  class Auth extends React.Component {

    render() {
      return this.props.isAuthenticated
      ? <Component {...this.props}/>
      : <Login fromRoute={Component.routeName} />
    }
  }

  function mapStateToProps({ authedUser }) {
    return { isAuthenticated: authedUser !== null };
  }

  return connect(mapStateToProps)(Auth)
}


