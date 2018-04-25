import React, { Component } from 'react';

class AddMessage extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  addMessage() {
    this.props.onAddMessage(this.state.text);

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text"
               value={ this.state.text }
               onChange={ (e) => { this.setState({ text: e.target.value }) }} />

        <button onClick={() => { this.addMessage() }}>Add</button>
      </div>
    );
  }
}

export default AddMessage;
