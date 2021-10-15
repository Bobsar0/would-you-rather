import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless function component that represents a Shelf holding a list of books
 * @param {object} props properties passed down from parent component
 * @returns a button
 */
function CustomButton(props) {
  const { title, isDisabled, onSubmit } = props;

  return (
    <button className="btn" type="submit" disabled={isDisabled}>
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default CustomButton;
