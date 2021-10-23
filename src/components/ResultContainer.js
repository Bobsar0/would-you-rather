import React from 'react';
import { Progress } from 'semantic-ui-react';
import { capitalizeFirstLetter }from '../utils/helpers';
import PropTypes from 'prop-types';

export default function ResultContainer(props) {
  const {option, totalVotes, isVoted} = props

  const activeClass = isVoted === true ? "active" : ""
  const votedClass = isVoted === true ? "voted" : "voted  hide"

  return (
    <div className={`container result ${activeClass}`}>
       <div className={votedClass}>
          Your vote
        </div>      
      <h4>{capitalizeFirstLetter(option.text)}</h4>
      <Progress value={option.votes.length} total={totalVotes} progress='percent' color='green'/>
      <h5>{option.votes.length} out of {totalVotes} votes</h5>
    </div>
  )
}

ResultContainer.propTypes = {
  option: PropTypes.object.isRequired,
  totalVotes: PropTypes.number.isRequired,
  isVoted: PropTypes.bool.isRequired
};
