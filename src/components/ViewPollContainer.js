import React from 'react';

function ViewPollContainer(props) {
  const {content, button} = props
  console.log('buttonnn: ', button)

  return (
    <div>
      <h3>Would You Rather</h3>
      {content}
      {button ? button : <></>}
    </div>
  );
}

export default ViewPollContainer;
