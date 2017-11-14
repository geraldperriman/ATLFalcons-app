import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';


import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {
  getPlayers() {
     return [
       {
         _id: 1,
         name: "Julio Jones",
         gamesPlayed: 16,
         recepetions: 136,
         yards: 1871,
         averageYardsPerAttempt: 14,
         yardsPerGame:117 ,
         longestPlay: 70,
         touchDowns: 8,
         experience:7,
       },
       {
         _id: 2,
         name: "Mohamad Sanu",
         gamesPlayed: 15,
         recepetions: 59,
         yards: 653,
         averageYardsPerAttempt: 11,
         yardsPerGame:44,
         longestPlay: 59,
         touchDowns: 4,
         experience:6,
       },
       {
         _id: 3,
         name: "Taylor Gabriel",
         gamesPlayed: 13,
         recepetions: 35,
         yards: 579,
         averageYardsPerAttempt: 16.5,
         yardsPerGame:45,
         longestPlay: 76,
         touchDowns: 6,
         experience:4,
       }
     ];
   }

       renderPlayers() {
    return this.getPlayers().map((player) => (
     <TeamList key={player._id} player={player} />
    ));
    }

    render() {
    return (
     <MuiThemeProvider>
       <div className="container">
         <AppBar
           title="Atlanta Falcons"
           iconClassNameRight="muidocs-icon-navigation-expand-more"
           showMenuIconButton={false}/>
         <div className="row">
           <div className="col s12 m7" ><Player /></div>
           <div className="col s12 m5" >
             <Divider/>
               <List>
                 {this.renderPlayers()}
               </List>
             <Divider/>
           </div>
           <div className="col s12 m5" ><TeamStats/></div>
         </div>
       </div>
     </MuiThemeProvider>
    )
    }
    }
