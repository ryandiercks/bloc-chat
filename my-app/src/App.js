import React, { Component } from 'react';
import './App.css';
import RoomList from './Components/RoomList.js';
import MessageList from './Components/MessageList.js';
import User from './Components/User.js';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMntbxUT8W3tAO8beTrcgaBg3Xu8XwadQ",
  authDomain: "bloc-chat-37f37.firebaseapp.com",
  databaseURL: "https://bloc-chat-37f37.firebaseio.com",
  projectId: "bloc-chat-37f37",
  storageBucket: "bloc-chat-37f37.appspot.com",
  messagingSenderId: "774613959137"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeRoom:[]
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(room) {
    this.setState({activeRoom:room});
  }

  setUser(user) {
    console.log("Setting user to " + (user ? user.displayName : user) + "...");
    this.setState({user:user});
  }

  render() {
    return (
      <div className="row">
      <div className="navbar navbar-default navbar-fixed-top">
    <User firebase={firebase} setuser={this.setUser} user={this.state.user}/>
</div>
      <div className="col-sm-3">
          <RoomList firebase={firebase} setactiveroom={this.setActiveRoom} activeroom={this.state.activeRoom} />
      </div>
      <div className="col-sm-9">
          <MessageList firebase={firebase} activeroom={this.state.activeRoom} />
      </div>
      </div>
    );
  }
}

export default App;
