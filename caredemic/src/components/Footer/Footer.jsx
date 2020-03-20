import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import logo from '../Heading/logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div>
            <img className="footer-logo" src={logo} />
            <Header as="h4" textAlign="center">
              COVID-19 is sweeping the globe. But we are not helpless.
              <br />
              Fear is a virus. Be the cure.
            </Header>
        </div>
        
    );
  }
}
export default Footer;