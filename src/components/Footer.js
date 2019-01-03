import React, { Component } from 'react';
import '../css/Footer.css';
import React_Logo from '../images/React_Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="ending-statement">
          <h4 className="builtWithReact">Built with <span>React <img src={React_Logo} className="footer-react-logo" alt="React_Logo"/></span></h4>
          <div className="contactIcons">
            <a href="https://www.linkedin.com/in/amitp88/" className="icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon  icon={faLinkedin} size="2x" />          
            </a>
            <a href="https://twitter.com/AmitPateldev" className="icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />          
            </a>
            <a href="https://github.com/AmitP88" className="icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />          
            </a>
            <a href="mailto: amitpatel_7@msn.com" className="icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />          
            </a>
            <a href="https://api.whatsapp.com/send?phone=15593477496" className="icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />          
            </a>
          </div>                 
          <p className="copyright">&copy; Copyright</p>        
        </div>
      </footer>
    );
  }
}