import React, { Component } from 'react';
import './Message.css';

const messages = [
  'Hey!',
  'How are you?',
  'I am at Peers Conf soooo pretty awesome!'
];

class App extends Component {
  renderMessages() {
    return messages.map((message, i) => {
      return <Message key={ i } text={ message } />
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Your Messages:</h1>

        { this.renderMessages() }
      </div>
    );
  }
}

export default App;

class Message extends Component {
  constructor() {
    super();

    this.state = {
      important: false
    }
  }

  markAsImportant = () => {
    this.setState({ important: !this.state.important });
  }

  render() {
    return (
      <div className="message">
        <span className={`text ${this.state.important ? 'important' : ''}`}>
          { this.props.text }
        </span>

        <button onClick={ () => this.markAsImportant() }>Mark as important</button>
      </div>
    );
  }
}
