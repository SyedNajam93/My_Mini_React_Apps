import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

  var courses = [
  {name : "complete node js course", price: 155},
  {name : "complete React developer course", price: 355},
  {name : "complete Javascript course ", price: 500},
  {name:"The full stack react course", price:350}
]




    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
