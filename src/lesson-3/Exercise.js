import React, { Component } from 'react';

class Exercise extends Component {
  constructor() {
    super();

    // Set initial state here
  }

  updateText(e) {
    // Update state with value of input
  };

  render() {
    return (
      <div style={{ /* Add 50px of padding to the top */ }}>
        <input type="text"
               onChange={ (e) => console.log(e.target.value) /* Replace this with a call to the updateText() method */ } />

        <p>{ "Replace me with the text value stored on state" }</p>
      </div>
    );
  }
}

export default Exercise;
