import React, { Component } from 'react';


    class MessageList extends Component {
        constructor(props) {
            super(props)

            this.state = {
                messages:[]
            }

            this.messagesRef = this.props.firebase.database().ref('messages');
        }

        componentDidMount() {
            this.messagesRef.on('child_added', snapshot => {
                const message = snapshot.val();
                message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) });
            });
        }

        formatDate(time)  {
            var d = new Date(time);
            return d.getHours()+ ":" + d.getMinutes()+ ":" + d.getSeconds();
        }

        listMessages() {
            if(this.props.activeroom.key) {
                const msgs = this.state.messages.filter( (msgs, index) => msgs.roomID === this.props.activeroom.key);
            if(msgs.length > 0) {
                return (
                <ul className="Messages-nav">
                    { msgs.map( (message, index) =>
                        <li key={ index } >
                        <div className="rightside-left-chat">
							<span id="message-author">{message.username}</span>
                            <span id="message-time">{this.formatDate(message.sentAt)}</span>
							<p>{message.content}</p>
						</div>
                        </li>
                    )}
                </ul>)
            }}
        }


    render() {
        return(
            <div className="Message-list">
                <h3 className="List-title">{this.props.activeroom.name}</h3>
                {this.listMessages()}
            </div>
        )
    }

}


export default MessageList;
