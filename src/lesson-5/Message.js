import React, { Component } from 'react';
import './Message.css';

// Notice how this is a class component because it has state!
class Message extends Component {
  constructor() {
    super();

    this.state = {
      important: false
    }
  }

  render() {
    return (
      <div className="message">
        <span className={`text ${this.state.important ? 'important' : ''}`}>
          { this.props.text }
        </span>

        {/* Exercise: toggle whether the message is "important" when
        this button is clicked */}
        <button>Mark as important</button>
      </div>
    );
  }
}

export default Message;
