import React, { Component } from 'react';
import './App.css';
import RoomList from './Components/RoomList.js';
import MessageList from './Components/MessageList.js'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmIFjK4m2RXWTgdJup8So7HVlKwpRXudc",
  authDomain: "bloc-chat-react-716ba.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-716ba.firebaseio.com",
  projectId: "bloc-chat-react-716ba",
  storageBucket: "bloc-chat-react-716ba.appspot.com",
  messagingSenderId: "705907879629"
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

  render() {
    return (
      <div className="row">
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
