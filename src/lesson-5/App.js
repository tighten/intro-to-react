import React, { Component } from 'react';
import Message from "./Answer";

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
