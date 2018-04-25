import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';

class App extends Component {
  render() {
    return (
      // Use className instead of class (since "class" is a reserved JS keyword)
      <div className="App">
        <header className="App-header">

          { /** Tags must be self-closing (use <tag /> instead of <tag>) */ }
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to Peers Conference 2018!</h1>
        </header>

        <div className="App-child">
            <ChildComponent />
        </div>
      </div>
    );
  }
}

export default App;
