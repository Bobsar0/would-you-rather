import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Segment, Menu, Label } from 'semantic-ui-react';
import { formatLeaderboardUser }from '../utils/helpers';
import PropTypes from 'prop-types';

class LeaderboardCard extends Component {

  render() {  
    const {user, rank} = this.props
    if (user === null) {
      return <p>This user does not exist</p>
    }

    const { name, avatarUrl, created, answered } = user
    return (
      <Segment.Group>
          <Segment>
            <Grid divided>
              <Grid.Row>

                <Grid.Column width={4}>
                  <Label as='a' color={getRibbonColor(rank)} ribbon>{rank}</Label>
                    <img src={avatarUrl} alt={`Avatar of ${name}`} className='avatar-large'/>
                </Grid.Column>

                <Grid.Column textAlign='center' width={9}>
                  <h2>{name}</h2>
                  <Grid relaxed='very' textAlign='center'>
                    <Grid.Column textAlign='left' width={10}>
                      Answered questions
                    </Grid.Column>
                    <Grid.Column textAlign='right' >
                        {answered}
                    </Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid relaxed='very' textAlign='center'>
                    <Grid.Column textAlign='left' width={10}>
                      Created questions
                    </Grid.Column>
                    <Grid.Column textAlign='right' >
                        {created}
                    </Grid.Column>
                  </Grid>
                </Grid.Column>

                <Grid.Column textAlign='center' width={3}>
                  <Menu fluid vertical>
                    <Menu.Item className='header'>score</Menu.Item>
                    <Menu.Item>
                      <h3 className='score ui fluid'>{created + answered}</h3>
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
      </Segment.Group>
    )
  }
}

function getRibbonColor(rank) {
  let color;
  switch(rank) {
    case 1:
      color = 'teal'
      break;
    case 2:
      color = 'yellow'
      break;
    case 3:
      color = 'orange'
      break
    default:
      color = 'blue'
  }
  return color;
}

LeaderboardCard.propTypes = {
  rank: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps({ users, questions }, {id, rank}) {
  const user = users[id];
  return {
    rank,
    user: user ? formatLeaderboardUser(user, questions) : null
  };
}

export default connect(mapStateToProps)(LeaderboardCard);
