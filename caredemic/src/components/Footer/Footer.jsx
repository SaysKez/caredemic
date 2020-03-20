import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import logo from '../Heading/logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div>
            <img className="footer-logo" src={logo} />
        </div>
        
    );
  }
}
export default Footer;