// MODULES
import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
// COMPONENTS
import BasicExample from './components/App';
// CSS
import './css/index.css';
import './css/App.css';
import './css/bootstrap.min.css';



 
 
ReactDOM.render((
  <BrowserRouter>
    <BasicExample />
  </BrowserRouter>
), document.getElementById('root'))
 
