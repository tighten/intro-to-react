import React, { Component } from 'react';

const exerciseMessages = [
  {
    text: 'Have you tried any good BBQ yet?',
    name: 'Jane'
  },
  {
    text: 'Not yet! Can you recommend a place?',
    name: 'Margaret'
  },
  {
    text: 'Actually, no - I am a vegetarian',
    name: 'Jane'
  }
];

class App extends Component {
  // We don't need a constructor, since this component has no state

  render() {
    return (
      <div className="container">
        <h1>Your Messages:</h1>

        {/* These all output the same thing! */}
        <MessageClassComponent message={ exerciseMessages[0] } />
        <MessageFunctionalComponent message={ exerciseMessages[1] } />
        <MessageDestructuredFunctionalComponent message={ exerciseMessages[2] } />
      </div>
    );
  }
}

export default App;

class MessageClassComponent extends Component {
  render() {
    return <div><strong>{ this.props.message.name }:</strong> { this.props.message.text }</div>;
  }
}

const MessageFunctionalComponent = (props) => {
  return <div><strong>{ props.message.name }:</strong> { props.message.text }</div>;
};

const MessageDestructuredFunctionalComponent = ({ message }) => {
  return <div><strong>{ message.name }: </strong> { message.text }</div>;
};
