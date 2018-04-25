import React, { Component } from 'react';

class MessageClassComponent extends Component {
  render() {
    return <div>{ this.props.text }</div>;
  }
}

export default MessageClassComponent;
