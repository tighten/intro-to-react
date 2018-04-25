import React, { Component } from 'react';
import Exercise from "./Exercise";

// You can also add CSS styles via a JavaScript object
const style = {
  fontSize: '20px',
  marginTop: '100px', // Notice that this is camelCased!
  textAlign: 'center',
  color: 'red',
  h3: {
    color: 'blue'
  },
};

class App extends Component {
  constructor() { // This method runs automatically when the class is initialized
    super(); // Used to access "this" on the parent object (React.Component)

    this.state = {
      count: 0
    };
  }

  // You can create methods in your component class like this
  // and fire them via onClick={() => this.decrement()}
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // Or you can write them like this
  // and fire them via onClick={this.increment}
  //
  // There is a slight performance benefit to doing it this way, but
  // it's ultimately up to you
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div style={ style }>
        <h3 style={ style.h3 }>
          { this.state.count }
        </h3>

        <button onClick={() => this.decrement()}>
          -
        </button>
        <button onClick={this.increment}>
          +
        </button>

        {/*<Exercise />*/}
      </div>
    );
  }
}

export default App;
