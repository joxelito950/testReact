import React, { Component } from 'react';
import AppBar from './navbar/appBar';

export default class Template extends Component {
    
  render() {
    return (
        <div id="controlView">
            <div className="row">
                <AppBar />
            </div>
            <div>
                {this.props.children}
            </div>
        </div>        
    );
  }
}