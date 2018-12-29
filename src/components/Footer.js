import React, { Component } from 'react';
import '../css/Footer.css';
import React_Logo from '../images/React_Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default class Footer extends Component {
  render(){
    return (
      <footer>
        <h3 className="builtWithReact">Built with <span>React <img src={React_Logo} className="footer-react-logo" alt="React_Logo"/></span></h3>
        <div className="contactIcons">
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
          <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
          <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="2x" />
          <FontAwesomeIcon className="icon" icon={faWhatsapp} size="2x" />
        </div>
        <p className="copyright">&copy; Copyright</p>
      </footer>
    );
  }
}