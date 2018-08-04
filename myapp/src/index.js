import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentApp from './App';
import Person from './Person-Component';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar-Component';
import Cars from './Cars-Component.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

ReactDOM.render(
<div>
<NavBar/>
<ParentApp/>
<Cars/>


</div>




, document.getElementById('root'));
registerServiceWorker();
