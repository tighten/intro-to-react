import React, { Component } from 'react';
import Message from "./Message";
import AddMessage from "./AddMessage";

// Wait 2 seconds, then return the messages
let fakeApiCall = new Promise((resolve) => {
  setTimeout(() => {
    const messages = [
      'Hey!',
      'How are you?',
      'I am at Peers Conf soooo pretty awesome!'
    ];

    resolve(messages);
  }, 2000);
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    // .then() fires once setTimeout() finishes on fakeApiCall()
    fakeApiCall.then(result => {
      this.setState({
        messages: result
      })
    });
  }

  handleAddMessage(message) {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  handleDeleteMessage(index) {
    this.setState({ messages: this.state.messages.filter((message, i) => index !== i)})
  }

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return <Message key={ i }
                      index={ i }
                      text={ message }
                      onDeleteMessage={(index) => this.handleDeleteMessage(index)} />
    });
  }

  // Exercise: show a loading icon (loading.svg) until the messages load
  renderLoadingIcon() {}

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
