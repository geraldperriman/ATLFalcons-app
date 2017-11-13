import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>

        </CardActions>
  </Card>
    )
  }
}
