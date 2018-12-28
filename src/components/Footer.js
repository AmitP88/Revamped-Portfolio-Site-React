import React, { Component } from 'react';
import '../css/Footer.css';
import React_Logo from '../images/React_Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
  render(){
    return (
      <footer>
        <h3 className="builtWithReact">Built with <span>React <img src={React_Logo} className="footer-react-logo" alt="React_Logo"/></span></h3>
        <div className="contactIcons">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faGithub} />
          <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
        </div>
      </footer>
    );
  }
}