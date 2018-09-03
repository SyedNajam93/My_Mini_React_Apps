
import React, { Component } from 'react';
import Course from './Course';
import Cars from './Cars';

export default class Coursesales extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       total:0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }

//sumprice method being describes     
sumPrice(price){
  this.setState({total:this.state.total + price})
}
  
  render() {
   console.log(this.props.items);
  var courses = this.props.items.map((itemResult, i)=>{
return <Course name={itemResult.name} price={itemResult.price} key={i} sumPrice={this.sumPrice} active={itemResult.active}/>
  });
   return (
      <div>
        <h1>You can buy course here:</h1>
        <div id='courses'>
        {courses}
        <p id="total">Total:{this.state.total}</p>

  
        </div>

      </div>
    )
  }
}
