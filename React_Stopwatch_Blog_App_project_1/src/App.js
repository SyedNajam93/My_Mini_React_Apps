

//WE USE PROPS WHEN THE VALUES STAY THE SAME AND CANT BE CHANGED 
// WE USE THIS.STATE   WEN THE VALUES OR THE DATA HAS TO BE CHANGED OVER THE PERIOD OF TIME

// so we first would create states and then create the data in the states and then access this data in the  component, using 
//this.state.thevaraiable , so in order words we would create props for the components  and then access that info 


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import NavBar from './NavBar-Component';
import Footer from './Footer-Component';
import Container from './Container-Component';
import Header from './Header-Component';




class ParentApp extends Component {
   render() {
    return (
      
      <div>
     <NavBar/>
     
    

   <Header/>

<Container/>
   
 

    <hr/>

   
  
     
     <Footer/>
     </div>
       
  
      );
  }
    

  
  }

//reserved for proptypes
ParentApp.propTypes = {
user:PropTypes.object,

}

// end of default props

export default ParentApp;// exporting the parrentApp className that i created above








