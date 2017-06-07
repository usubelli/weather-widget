// MODULES
import React, { Component } from 'react';
// import { Switch,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import { CSSTransitionGroup } from 'react-transition-group';
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
       

         <Router>
            <div>
                
                <Header />
                <hr/>

                 <Route render={({location}) => 
                   <CSSTransitionGroup 
                    transitionName={ {
                      enter: 'example-enter',
                      enterActive: 'example-enter-active',
                      leave: 'example-leave',
                      leaveActive: 'example-leave-active',
                      appear: 'appear',
                      appearActive: 'appearActive'
                    } }
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                  >
                    <Switch key={location.key} location={location}>
                      <Route exact path='/' component={Home}/>
                      <Route path='/settings' component={Settings}/> 
                    </Switch>
                  </CSSTransitionGroup>
                }/>
 
            </div>
        </Router>
    );
  }
}

export default App;


/*class App extends React.Component {

  render() {
    return (
       
        <div>
            <Header />
            <hr/>
            <Route render={({location, history, match}) => {
              return (
                <RouteTransition 
                  pathname={location.pathname}
                  atEnter={{ translateX: 100 }}
                  atLeave={{ translateX: -100 }}
                  atActive={{ translateX: 0 }}
                  mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                >
                  <Switch key={location.key} location={location}>
                    <Route exact path='/' component={Home}/>
                    <Route path='/settings' component={Settings}/> 
                  </Switch>
                </RouteTransition>
              );
            }} />

        </div>


    );
  }
}*/

 