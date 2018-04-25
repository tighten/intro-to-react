import React, { Component } from 'react';
import Message from "./Message";
import AddMessage from "./AddMessage";

const messages = [
  'Hey!',
  'How are you?',
  'I am at Peers Conf soooo pretty awesome!'
];

class App extends Component {
  constructor() {
    super();

    // We are storing on state this time so that React can track changes
    // (Also, as a reminder - this is equal to this.state = { messages: messages })
    this.state = { messages };
  }

  handleAddMessage(message) {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  // Exercise: implement the ability to delete a <Message /> child component
  handleDeleteMessage(index) {}

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return <Message key={ i }
                      index={ i } // Hint: you'll need this to implement delete functionality!
                      text={ message } />
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Your Messages:</h1>

        { this.renderMessages() }

        <AddMessage onAddMessage={ (message) => this.handleAddMessage(message) } />
      </div>
    );
  }
}

export default App;
