import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { grey500, redA700 } from 'material-ui/styles/colors';

const styles ={
  chip: {
    margin: 4 ,
  },
  wrapper: {
    display:'flex',
    flexWrap:'wrap',
  },
  button:{
    margin: 12,
  },
};


export default class Player extends Component {
  render() {
    return (
    <Card>
        <CardMedia
          overlay={<CardTitle title="Gerald Perriman" subtitle="Offense-12 - Defense-8" />}
        >
          <img src="juliojones.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
                <Chip
                  backgroundColor={redA700}
                  style={styles.chip}
                  >
                  <Avatar size={32} color={redA700} backgroundColor={grey500}>
                    99
                  </Avatar>
                  Receptions
                </Chip>
                <Chip
                  backgroundColor={redA700}
                  style={styles.chip}
                  >
                  <Avatar size={32} color={redA700} backgroundColor={grey500}>
                    2k
                  </Avatar>
                  Yards
                </Chip>
                <Chip
                  backgroundColor={redA700}
                  style={styles.chip}
                  >
                  <Avatar size={32} color={redA700} backgroundColor={grey500}>
                    21
                  </Avatar>
                  Touchdowns
                </Chip>
                <Chip
                  backgroundColor={redA700}
                  style={styles.chip}
                  >
                  <Avatar size={32} color={redA700} backgroundColor={grey500}>
                    500
                  </Avatar>
                  Yards after Catch
                </Chip>
        </CardText>
        <CardActions>

        </CardActions>
  </Card>
    )
  }
}
