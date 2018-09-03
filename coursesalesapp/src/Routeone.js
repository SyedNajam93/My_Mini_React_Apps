import React, { Component } from 'react';
import { Link } from 'react-router-dom';//ALWAYS IMPORT LINK FROM REACT-ROUTER DOM IN VERSON 4


 class Routeone extends Component {
  render() {
    return (
      <div>
       <h1>Hey there iam route one</h1> 
       <p>This is just me testing react routing </p>
       <ul>
       <li><Link to='App'>Link one</Link></li>
       </ul>
      </div>
    )
  }

}

export default Routeone;