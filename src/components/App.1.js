import React, { Component } from 'react';

import logo from '../img/logo.svg';

import ContainerBloc from './ContainerBloc';



class App extends Component {

  render() {

    return (
        <div className="App">
            <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h2>Welcome to weather widget</h2>
            </div> 
            <ContainerBloc />
        </div>
    );

  }

}

export default App;
