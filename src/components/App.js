import React, { Component } from 'react';

import ContainerBloc from './ContainerBloc';

import logo from '../logo.svg';
import '../css/App.css';
import '../css/bootstrap.min.css';

class App extends Component {

  render() {

    return (
        <div className="App">
            <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h2>Welcome to weather widget</h2>
            </div> 
            <ContainerBloc city={"paris"} />
        </div>
    );

  }

}

export default App;
