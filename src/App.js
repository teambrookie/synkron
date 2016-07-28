import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plyr from './Plyr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Synkron !</h2>
        </div>
        <Plyr/>
      </div>
    );
  }
}

export default App;
