import React, { Component } from 'react';
import MessageClassComponent from "./MessageClassComponent";
import MessageFunctionalComponent from "./MessageFunctionalComponent";
import MessageDestructuredFunctionalComponent from "./MessageDestructuredFunctionalComponent";

const messages = [
  'Hey!',
  'How are you?',
  'I am at Peers Conf soooo pretty awesome!'
];

// Exercise: update the <Message /> child components to display both the text
// and the name properties in "const exerciseMessages" below
//
// (Hint - you can add each prop separately (<Message text={} name={} />)
// or pass through the entire message object (<Message message={} />
// and access the data via "this.props.message.text" and
// "this.props.message.name" on the Message child component

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
        <MessageClassComponent text={ messages[0] } />
        <MessageFunctionalComponent text={ messages[1] } />
        <MessageDestructuredFunctionalComponent text={ messages[2] } />
      </div>
    );
  }
}

export default App;
