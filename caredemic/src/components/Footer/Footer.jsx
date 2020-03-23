import React, { Component } from 'react';
import logo from '../Heading/logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
            <p>Caredemic crafted from a social distance by <a href="" target="_blank">Phil</a> &#38; <a href="https://kez.ie" target="_blank">Kez</a>.</p>
            <p>Caredemic is a not for profit project. All ideas crowdsourced and zero affiliation links. This is not medical advice. <br /> <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">Please follow official health guidelines and local guidance.</a></p>
            <img alt="caredemic logo" className="footer-logo" src={logo} />
        </div>
        
    );
  }
}
export default Footer;