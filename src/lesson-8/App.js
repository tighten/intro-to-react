import React, { Component } from 'react';
import Message from "./Message";
import AddMessage from "./AddMessage";
import loading from './loading.svg';
import base from './firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Anonymous',
      loading: true,
      messages: []
    };
  }

  componentDidMount() {
    base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true
    });

    this.setState({ loading: false });
  }

  handleAddMessage(text) {
    const message = {
      text,
      name: this.state.name
    };

    this.setState({ messages: this.state.messages.concat(message) });
  }

  handleDeleteMessage(index) {
    this.setState({ messages: this.state.messages.filter((message, i) => index !== i)})
  }

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return <Message key={ i }
                      index={ i }
                      message={ message }
                      onDeleteMessage={(index) => this.handleDeleteMessage(index)} />
    });
  }

  renderLoadingIcon() {
    return <div><img src={loading} alt="loading icon" /></div>;
  }

  render() {
    return (
      <div className="container">
        <h3>Messages from your peers:</h3>

        { this.state.loading ? this.renderLoadingIcon() : this.renderMessages() }

        <AddMessage onAddMessage={ (text) => this.handleAddMessage(text) } />
      </div>
    );
  }
}

export default App;
