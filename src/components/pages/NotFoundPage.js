
import React from 'react';
import PropTypes from 'prop-types';

export default function NotFoundPage(props) {
  const {message} = props

  return (
    <div>    
      <h1>404</h1>
      <h5>{message}</h5>
    </div>
  )
}

NotFoundPage.propTypes = {
  message: PropTypes.string.isRequired,
};
