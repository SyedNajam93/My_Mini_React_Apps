
import React, { Component } from 'react';
import './App.css';



export class Person extends  React.Component{     //exporting the cars class also at the top
    render(){
     console.log(this.props);
      
     return(
     <div className='container'>
<h1>Heloo iama new person component</h1>
<p> Hey there is a new developer and his info is {this.props.name}, his age is {this.props.age}, his weight is{this.props.weight}
and his buisness name is  :  {this.props.user.name}   </p>
     
    </div>//Main div Ends here
     ); 
      
    }}

    //Compnent can be passed from other components and accesed through this.props. method

    export default  Person; // exporting the cars class that i created 