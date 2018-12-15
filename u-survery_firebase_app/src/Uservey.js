
import React, { Component } from 'react';
 var firebase = require('firebase');
 var  uuidv1 = require('uuid/v1');

 var config = {
    apiKey: "AIzaSyA0BKeMHoGiO-33B6qWu8FGhh3ozvV0kf0",
    authDomain: "u-survey-react-app.firebaseapp.com",
    databaseURL: "https://u-survey-react-app.firebaseio.com",
    projectId: "u-survey-react-app",
    storageBucket: "u-survey-react-app.appspot.com",
    messagingSenderId: "653676366587"
  };
  firebase.initializeApp(config);



 
export default class Uservey extends Component {
nameSubmit(event){
  var studentName = this.refs.name.value;
  this.setState({studentName:studentName}, function(){
    console.log(this.state);
  });
}



  constructor(props){
super(props);
this.state={
uid:uuidv1(),
studentName:'',
answers:{
answer1:'',
answer2:'',
answer3:''
},
isSubmitted:false
};//end of state
//bindinf method here
this.nameSubmit = this.nameSubmit.bind(this);

}//end of constructor
  
render(){
let studentName;
let question;

if(this.state.studentName === '' && this.state.isSubmitted === false){
  studentName = <div><h1>Hey Student please let us know your name</h1>
  <form onSubmit={this.nameSubmit}><input type="text" name="firstname" className="inputstyle" placeholder="enter ur name" ref='name'></input>
  </form></div>
}else{

}

  return(

            <div>
<h1>{studentName}</h1>
---------------------------
<h1>{question}</h1>

            </div>
);// end of return




}//end of render
}// end of uservey
