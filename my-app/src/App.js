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
		super(props);
		this.state = {
			activeRoomKey: '',
			activeRoomName: '',
		};
	}

	handleSetActiveRoom = (roomKey,roomName) => {
		this.setState({
			activeRoomKey: roomKey,
			activeRoomName: roomName,
		});
	}

	render() {
		return (
			<div className="App">
				<RoomList firebase={firebase} activeRoomKey={this.state.activeRoomKey} handleSetActiveRoom={this.handleSetActiveRoom}>
				</ RoomList>
				<MessageList firebase={firebase} activeRoomKey={this.state.activeRoomKey} activeRoomName={this.state.activeRoomName}>
				</MessageList>
			</div>
		);
	}
}

export default App;
