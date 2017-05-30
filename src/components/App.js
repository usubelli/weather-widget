// MODULES
import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
// COMPONENTS
import Header from './Header'; 
// PAGES
import Settings from '../pages/Settings';
import Home from '../pages/Home';
// IMAGES
import logo from '../img/logo.svg';
 


class App extends React.Component {

  render() {
    return (
        <div>
            <Header />
            <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/settings' component={Settings}/> 
              </Switch>
            </main>
        </div>
    );
  }
}

export default App;
