import React from 'react';
import ReactDOM from 'react-dom';


export default class Cars extends React.Component {
  
  
    render() {
       

      console.log(this.props);

    return (
        <div className='card'>
        <h1>Iam the car component created by</h1>
        <h1>Our first car is </h1>
        <h1>Model:</h1>
       
        <img src="http://thumbnail.newsinc.com/33423492.sf.jpg" alt="Avatar" class="center"/>
       
        
       
       
       </div>//Main div Ends here
    )
  }
}
