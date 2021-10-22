import React from 'react';

function ViewPollContainer(props) {
  const {headerText, content, button} = props
  console.log('buttonnn: ', button)

  return (
    <div>
      <h3>{headerText ? headerText : 'Would You Rather'}</h3>
      {content}
      {button ? button : <></>}
    </div>
  );
}

export default ViewPollContainer;
