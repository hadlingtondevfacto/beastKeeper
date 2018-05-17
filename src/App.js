import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'nuka-carousel';

var arraySize = 10;
//Is there really not a Vector/dynamic-sized array? Gross, but not my current focus.
var arrayOfBeasts = new Array(arraySize);

//This is embarrassing datagen. Like, really bad.
var beast = {name:"Spot", breed:"dog"};
var beast2 = {name:"Not Spot", breed:"dog"};
var beast3 = {name:"Uninspired Data Generation", breed:"Porygon"};
var beast4 = {name:"I am already embarrassed.", breed: "programmer"};
arrayOfBeasts[0]=beast;
arrayOfBeasts[1]=beast2;
arrayOfBeasts[2]=beast3;
arrayOfBeasts[3]=beast4;

const listItems = arrayOfBeasts.map((beast) =>
  <div>
    <li>Name: {beast.name}</li>
    <li>Breed: {beast.breed}</li>
  </div>
);	


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
			{listItems}
		  </Carousel>
        </p>
      </div>
    );
  }
}

export default App;
