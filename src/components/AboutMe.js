import React, { Component } from 'react';
import '../css/AboutMe.css';
import ProfilePhoto from '../images/newProfile.jpg';

export default class AboutMe extends Component {
  render(){
    return (
      <div className="About-Me" id="AboutMe">
        <div className="content">
          <div className="ProfilePhoto-container">
            <img src={ProfilePhoto} className="ProfilePhoto" alt="ProfilePhoto"/>
            <h2 className="first-last-name">Amit Patel</h2>
            <h3 className="ProfilePhoto-title">Front End Developer</h3>     
          </div>

          <p className="message">Front End Developer specializing in React. I solve problems, build attractive UI/UX, and develop interesting projects.
          If you want to chat, feel free to reach me at any of the links below. </p>        
        </div>
      </div>
    );
  }
}