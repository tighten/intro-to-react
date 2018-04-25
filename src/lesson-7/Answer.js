import React, { Component } from 'react';
import Message from "./Message";
import AddMessage from "./AddMessage";
import loading from './loading.svg';

let fakeApiCall = new Promise((resolve) => {
  setTimeout(() => {
    const messages = [
      'Hey!',
      'How are you?',
      'I am at Peers Conf soooo pretty awesome!'
    ];

    resolve(messages);
  }, 2500);
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      messages: []
    };
  }

  componentDidMount() {
    fakeApiCall.then(result => {
      this.setState({
        loading: false,
        messages: result
      });
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

  renderLoadingIcon() {
    return <div><img src={loading} alt="loading icon" /></div>;
  }

  render() {
    return (
      <div className="container">
        <h1>Your Messages:</h1>

        { this.state.loading ? this.renderLoadingIcon() : this.renderMessages() }

        <AddMessage onAddMessage={ (message) => this.handleAddMessage(message) } />
      </div>
    );
  }
}

export default App;
