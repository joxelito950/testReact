import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';

export default class extends Component {

    render() {
        return (
            <div className="row">
          		<div id="header" className="jumbotron">
          		  <h1>Spirit</h1>
          		</div>
              <Footer />
            </div>
        );
    }
}
