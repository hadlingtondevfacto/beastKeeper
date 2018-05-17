import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'nuka-carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beast Keeper!</h1>
        </header>
        <p className="App-intro">
		  <Carousel>
          This is where a pet rolodex should go.
		  </Carousel>
        </p>
      </div>
    );
  }
}

export default App;
