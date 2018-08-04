import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentApp from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar-Component';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<div>

<ParentApp/>



</div>




, document.getElementById('root'));
registerServiceWorker();
