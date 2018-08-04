import React, { Component } from 'react';

import './App.css';


 export class Cars extends  React.Component{     //exporting the cars class also at the top
    render(){
    console.log(this.props); 
      
     return(
     <div className='card'>

     <div className='container'>
     <h1>Heloo iama new Cars component</h1>
     <h1>Car Show in NJ</h1>
     
     <img src="http://thumbnail.newsinc.com/33423492.sf.jpg" alt="Avatar" class="center"/>
    
    
    </div>
    </div>//Main div Ends here
     ); 
      
    }}

    //Compnent can be passed from other components and accesed through this.props. method

    export default  Cars; // exporting the cars class that i created 