import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import coursesales from './coursesales';



class App extends Component {
  render() {

   var courses = [
     {name:'complete node js code', price:150},
     {name:'complete react js course', price:250},
     {name:'complete javascript course', price:250}


   ];

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        
        </header>
        
        <coursesales/>
        
        
      </div>
    );
  }
}

export default App;
