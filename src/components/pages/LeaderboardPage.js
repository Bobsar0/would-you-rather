import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScore } from '../../utils/helpers';
import LeaderboardCard from '../LeaderboardCard';
import PropTypes from 'prop-types';

class LeaderboardPage extends Component{
  static routeName = '/leaderboard';

  render() {
    const { userIds } = this.props;
    return (
      userIds.map((uid, index) => (
        <LeaderboardCard key={uid} id={uid} rank={index+1}/>
      ))
    );
  }
}

LeaderboardPage.propTypes = {
  userIds: PropTypes.array.isRequired,
};

function mapStateToProps({ users, questions }) {
  const uIds = Object.keys(users).sort(
    (a, b) => getScore(b, questions) - getScore(a, questions)
  );

  return {
    userIds: uIds.slice(0, 3)
  };
}

export default connect(mapStateToProps)(LeaderboardPage);
