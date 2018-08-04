

//WE USE PROPS WHEN THE VALUES STAY THE SAME AND CANT BE CHANGED 
// WE USE THIS.STATE   WEN THE VALUES OR THE DATA HAS TO BE CHANGED OVER THE PERIOD OF TIME

// so we first would create states and then create the data in the states and then access this data in the  component, using 
//this.state.thevaraiable , so in order words we would create props for the components  and then access that info 


import React, { Component } from 'react';

import Cars from './Cars-Component.js'
import Person from './Person-Component'
import PropTypes from 'prop-types'

import './App.css';

class ParentApp extends Component {
  constructor(props) {//the constructor will always be rendered before the rendor method
    super(props)
  
    this.state = {
     
    };//end of object
  
  }
   render() {
  
    var user = {
    name:"coding-saiyan",
    salery:85000,
    jobTile:"full-stack-developer",
    hobbies:["xbox", "swimming"]

    }// we need to pass this info down in the person in order to work
    

    return (
      
    <div className='card'>
     <div className='container'>
     
    
       <Person name={"syedhanajm"} age={25} weight={155 + "killos"} user={user}/>
       
       </div>
      </div>//props are defined in the cars component that we created cmg form cars.js
     

    );
  }
}
//reserved for proptypes
ParentApp.propTypes = {
user:PropTypes.object,

}

// end of default props

export default ParentApp;// exporting the parrentApp class that i created above








