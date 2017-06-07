// MODULES
import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

class Home extends React.Component {

    render(){
        return(
            <div style={{background:'red'}}>
                <h1>Welcome to the Tornadoes Website!</h1>
            </div>
        )
    }

}

export default Home;