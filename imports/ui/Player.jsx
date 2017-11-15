import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { red900, grey900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Gerald Perriman" subtitle="11-Wide Receiver-The Best" />}
        >
          <img src="juliojones.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={red900} backgroundColor={grey900}>
                16
              </Avatar>
              Games Played
            </Chip>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={red900} backgroundColor={grey900}>
                136
              </Avatar>
              Receptions
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              1871
            </Avatar>
              Yards
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              13.8
            </Avatar>
              Yards Per Reception
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              117
            </Avatar>
              Yards Per Game
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              70T
            </Avatar>
              Average Yards Per Run:
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              8
            </Avatar>
              TDs
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              7
            </Avatar>
              Yrs in NFL
          </Chip>
          <Chip
            backgroundColor={red900}
            style={styles.chip}
            >
            <Avatar size={32} color={red900} backgroundColor={grey900}>
              0
            </Avatar>
              Rush Attempts:
          </Chip>
          </div>
        </CardText>
        <CardActions>
          {/* <RaisedButton
            label="Edit player/stats"
            labelPosition="before"
            style={styles.button}
          /> */}
        </CardActions>
      </Card>
    )
  }
}
