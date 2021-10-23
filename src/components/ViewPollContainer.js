import React from 'react';

function ViewPollContainer(props) {
  const {headerText, content} = props

  return (
    <div>
      <h3>{headerText ? headerText : 'Would You Rather'}</h3>
      {content}
    </div>
  );
}

export default ViewPollContainer;
