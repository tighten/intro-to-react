import React, { Component } from 'react';
import importMe from './importMe.svg';

class GrandChildComponent extends Component {
  render() {
    return (
      <div>
        <img src={importMe} />
      </div>
    );
  }
}

export default GrandChildComponent;
