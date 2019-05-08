import React, { Component } from 'react';
import Profile from './Profile';
import Info from './Info';

class Main extends Component {
    render() { 
        return ( 
            <div>
                <Profile></Profile>
                <Info></Info>
            </div>
         );
    }
}
 
export default Main;