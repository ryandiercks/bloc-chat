import React, { Component } from 'react';
import './App.css';
import RoomList from './Components/RoomList';
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
  render() {
    return (
      <div className="row">
      <div className="col-sm-3">
            <RoomList firebase={firebase} />
      </div>
      <div className="col-sm-8">
          Messages will go here???
      </div>
      </div>
    );
  }
}


export default App;
