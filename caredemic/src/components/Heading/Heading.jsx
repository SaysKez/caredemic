import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import logo from './logo.png';
import './heading.css';

class Heading extends Component {
  render() {
    return (
        <div className="heading">
            <img alt="caredemic logo" className="heading-logo" src={logo} />
            <Header as="h1" textAlign="center">What can I do?</Header>
            <Header as="h4" textAlign="center">
              COVID-19 is sweeping the globe. But we are not helpless.
              <br />
              Fear is a virus. Spread hope.
            </Header>
        </div>
        
    );
  }
}
export default Heading;
