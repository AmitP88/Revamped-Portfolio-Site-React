import React, { Component } from 'react';
import '../css/Footer.css';
import React_Logo from '../images/React_Logo.png';

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <h3>Built with <span>React <img src={React_Logo} className="footer-react-logo" alt="React_Logo"/></span></h3>
      </footer>
    );
  }
}