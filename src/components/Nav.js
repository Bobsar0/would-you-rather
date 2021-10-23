import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser';

class Nav extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    // SET_AUTHED_USER in store
    const { dispatch } = this.props;

    dispatch(handleSetAuthedUser(null));
  }


  render() {
    const { authedUser } = this.props

      return (
          <nav className="ui pointing secondary menu">
            <NavLink to='/' exact activeClassName='active' className="item">Home</NavLink>
            <NavLink to='/add' exact activeClassName='active' className="item">New Question</NavLink>
            <NavLink to='/leaderboard' exact activeClassName='active' className="item">Leaderboard</NavLink>
            
            { authedUser != null
              ? <div className="right menu">
                  <a className="item">
                    <span>{authedUser.name} 
                      <img className="item" src={authedUser.avatarURL} alt={`Avatar of ${authedUser.name}`} className='avatar'/>
                    </span>
                  </a>
                  <NavLink to='/login' exact activeClassName='active' className="item" onClick={this.handleLogout}>Logout</NavLink>
                </div>
              : <Fragment></Fragment>
                }
          </nav>
        )
  }

}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Nav);