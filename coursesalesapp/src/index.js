import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cars from './Cars';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Routeone from './Routeone';
import { Link } from 'react-router-dom';



ReactDOM.render(
    
    <BrowserRouter>
    <div>
    <Route path="/" component={App}></Route>

    <Route path="/Routeone" component={Routeone}></Route>



    </div>


    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
