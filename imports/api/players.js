import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  position: { type: String },
  gamesPlayed: { type: Number, defaultValue: 0},
  recepetions: { type: Number, defaultValue: 0},
  rushAttempts:{ type: Number, defaultValue: 0},
  yards: { type: Number, defaultValue: 0},
  averageYardsPerRun:{ type: Number, defaultValue: 0},
  averageYardsPerReception: { type: Number, defaultValue: 0},
  yardsPerGame:{ type: Number, defaultValue: 0} ,
  touchDowns: { type: Number, defaultValue: 0},
  experience:{ type: Number, defaultValue: 0},
  notes:{ type: String, optional: true},
  teamOwner: {type: String },
});

Players.attachSchema(PlayerSchema);
