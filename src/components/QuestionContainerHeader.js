import React from 'react';

import {Segment } from 'semantic-ui-react'

export default function QuestionContainerHeader(props){
  return (
      <Segment as='h3' color='teal'>{props.text}</Segment>
  )
}