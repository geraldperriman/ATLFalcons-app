import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from '../api/players';

export default class Example extends Component {
  submitPlayer(event) {
    event.preventDefault();

    Players.insert({
      name: this.refs.name.value,
      position: this.refs.position.value,
      gamesPlayed: this.refs.gamesPlayed.value,
      recepetions: this.refs.recepetions.value,
      rushAttempts: this.refs.rushAttempts.value,
      yards: this.refs.yards.value,
      averageYardsPerRun: this.refs.averageYardsPerRun.value,
      averageYardsPerReception: this.refs.averageYardsPerReception.value,
      yardsPerGame: this.refs.yardsPerGame.value,
      touchDowns: this.refs.touchDowns.value,
      experience:this.refs.experience.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      teamOwner: Meteor.userId(),
    });

    console.log("Rise Up!");

    browserHistory.push('/');
  }
 render() {
   return (
     <div className="row">
       <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
         <h3>Add a new player</h3>

         <div className="row">
           <div className="input-field col s6">
             <input placeholder="Name" ref="name" type="text" className="validate"/>
           </div>
           <div className="input-field col s6">
             <input placeholder="Position" ref="position" type="text" className="validate"/>
           </div>
         </div>

         <div className="row">
           <div className="input-field col s6">
             <h5>Games Played</h5>
             <select className="browser-default" ref="gamesPlayed">
               <option value="10">10 - Hasn't demonstrated skills</option>
               <option value="20">30 - Needs improvement</option>
               <option value="30">30 - Skill acquired</option>
               <option value="40">40 - Great skills/could teach</option>
             </select>
           </div>
           <div className="input-field col s6">
             <h5>Recepetions</h5>
             <select className="browser-default" ref="recepetions">
               <option value="10">10 - Hasn't demonstrated skills</option>
               <option value="20">30 - Needs improvement</option>
               <option value="30">30 - Skill acquired</option>
               <option value="40">40 - Great skills/could teach</option>
             </select>
           </div>
         </div>

         <div className="row">
           <div className="input-field col s6">
             <h5>Run Attempts</h5>
             <select className="browser-default" ref="rushAttempts">
               <option value="10">10 - Hasn't demonstrated skills</option>
               <option value="20">30 - Needs improvement</option>
               <option value="30">30 - Skill acquired</option>
               <option value="40">40 - Great skills/could teach</option>
             </select>
           </div>
           <div className="input-field col s6">
             <h5>Total Yards</h5>
             <select className="browser-default" ref="yards">
               <option value="0">0 - Hasn't demonstrated skills</option>
               <option value="1">1 - Needs improvement</option>
               <option value="2">2 - Skill acquired</option>
               <option value="3">3 - Great skills/could teach</option>
             </select>
           </div>
         </div>

         <div className="row">
           <div className="input-field col s6">
             <h5>Yards Per Run</h5>
             <select className="browser-default" ref="averageYardsPerRun">
               <option value="0">0 - Hasn't demonstrated skills</option>
               <option value="1">1 - Needs improvement</option>
               <option value="2">2 - Skill acquired</option>
               <option value="3">3 - Great skills/could teach</option>
             </select>
           </div>
           <div className="input-field col s6">
             <h5>Yards Per Recepetion</h5>
             <select className="browser-default" ref="averageYardsPerReception">
               <option value="0">0 - Hasn't demonstrated skills</option>
               <option value="1">1 - Needs improvement</option>
               <option value="2">2 - Skill acquired</option>
               <option value="3">3 - Great skills/could teach</option>
             </select>
           </div>
         </div>

         <div className="row">
           <div className="input-field col s6">
             <h5>Yards Per Game</h5>
             <select className="browser-default" ref="yardsPerGame">
               <option value="0">0 - Hasn't demonstrated skills</option>
               <option value="1">1 - Needs improvement</option>
               <option value="2">2 - Skill acquired</option>
               <option value="3">3 - Great skills/could teach</option>
             </select>
           </div>
           <div className="input-field col s6">
             <h5>TouchDowns!</h5>
             <select className="browser-default" ref="touchDowns">
               <option value="0">0 - Hasn't demonstrated skills</option>
               <option value="1">1 - Needs improvement</option>
               <option value="2">2 - Skill acquired</option>
               <option value="3">3 - Great skills/could teach</option>
             </select>
           </div>
         </div>
         <div className="input-field col s6">
           <h5>Years of Experience</h5>
           <select className="browser-default" ref="experience">
             <option value="0">0 - Hasn't demonstrated skills</option>
             <option value="1">1 - Needs improvement</option>
             <option value="2">2 - Skill acquired</option>
             <option value="3">3 - Great skills/could teach</option>
           </select>
         </div>

         <div className="row">
           <div className="input-field col s6">
             <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
           </div>
           <div className="input-field col s6">
             <button className="btn waves-effect waves-light" type="submit" name="action">Submit
               <i className="material-icons right">send</i>
             </button>
           </div>
         </div>

       </form>
     </div>
   )
 }
}
