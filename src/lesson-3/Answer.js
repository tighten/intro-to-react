import React, { Component } from 'react';

class Exercise extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
        <input type="text"
               onChange={ (e) => this.updateText(e) } />
        <p>{ this.state.text }</p>
      </div>
    );
  }
}

export default Exercise;
