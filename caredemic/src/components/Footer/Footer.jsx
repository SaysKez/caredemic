import React, { Component } from 'react';
import logo from '../Heading/logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
            <img alt="caredemic logo" className="footer-logo" src={logo} />
            <p>Some kind of disclaimer text</p>
        </div>
        
    );
  }
}
export default Footer;