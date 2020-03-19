import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react'
import './heading.css';

class Heading extends Component {
  render() {
    return (
        <div>
            <Icon className={"heading-icon"} name="heartbeat" size="massive" />
            <Header as="h1" textAlign="center" color="orange">What can I do?</Header>
            <Header as="h4" textAlign="center">
              COVID-19 is sweeping the globe. But we are not helpless
              <br />
              The choice to spread hope or fear, is ours.
            </Header>
        </div>
        
    );
  }
}
export default Heading;
