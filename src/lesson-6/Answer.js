import React, { Component } from 'react';
import "./Message.css";
import AddMessage from "./AddMessage";


class App extends Component {
  constructor() {
    super();

    this.state = { messages: [
        'Hey!',
        'How are you?',
        'I am at Peers Conf soooo pretty awesome!'
      ]
    };
  }

  handleAddMessage(message) {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  // handleDeleteMessage(index) {
  //   const messages = this.state.messages.slice();
  //   messages.splice(index, 1);
  //
  //   this.setState({ messages });
  // }

  handleDeleteMessage(index) {
    this.setState({ messages: this.state.messages.filter((message, i) => index !== i)})
  }

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return <Message key={ i }
                      index={ i }
                      text={ message }
                      onDeleteMessage={ (index) => this.handleDeleteMessage(index) } />
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

const Message = ({ text, index, onDeleteMessage }) => {
  return (
    <div className="message">
      <span className="text">{ text }</span>

      <button onClick={() => onDeleteMessage(index) }>x</button>
    </div>
  );
};

