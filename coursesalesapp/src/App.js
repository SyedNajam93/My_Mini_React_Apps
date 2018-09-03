import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//IMPORTING COMPONENTS
import Coursesales from './Coursesales';
import Cars from './Cars';
import { Link } from 'react-router-dom';


class App extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
      name:"honda-civic",
      model:2018,
      price:28000,
      type:'4-door',
      location:'lindenwold'
    }

    let Arrray = this.state.name;
    console.log(Arrray);
    //const ConvertedArray = Object.values(Arrray);//converted object to array so that i can loop throught it
    //ConvertedArray.forEach((values, i) => {
   
  // });


 }
 
 
 
 
 
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
          <ul>
          <li><Link to='/Routeone'>Link one</Link></li>
          </ul>
        </header>
        
        
        <Coursesales items={courses}/>
        <Cars/>


      </div>
    );
  }
}

export default App;
