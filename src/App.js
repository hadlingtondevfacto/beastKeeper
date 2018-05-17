import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'nuka-carousel';
import KeyField from './SearchKeyField';

var arrayOfBeasts = [];

//This is embarrassing datagen. Like, really bad.
var beast1 = {name:"Spot", breed:"dog"};
var beast2 = {name:"Not Spot", breed:"dog"};
var beast3 = {name:"Uninspired Data Generation", breed:"Porygon"};
var beast4 = {name:"I am already embarrassed.", breed: "programmer"};
arrayOfBeasts.push(beast1);
arrayOfBeasts.push(beast2);
arrayOfBeasts.push(beast3);
arrayOfBeasts.push(beast4);

var listOfKeys=[];

for (var i = 0;i<arrayOfBeasts.length;i++) {
	//listOfKeys.push(arrayOfBeasts[i].name)
	var beastKeys = Object.keys(arrayOfBeasts[i]);
	for (var j = 0;j<beastKeys.length;j++){
		if(listOfKeys.indexOf(beastKeys[j]) === -1){
			listOfKeys.push(beastKeys[j]);	
		}
	}
}

var listItems = arrayOfBeasts.map((beast) =>
  <div>
    <li>Name: {beast.name}</li>
    <li>Breed: {beast.breed}</li>
  </div>
);	

var listKeys = listOfKeys.map((key) =>
    <li>{key}</li>
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
			{listItems}
		  </Carousel>
        </p>
		<p className="Search-area">
		Search criteria area:  
		<KeyField keyList={listOfKeys}/>
		<p className="Search-criteria">
		
		</p>
		</p>
      </div>
    );
  }
}

export default App;
