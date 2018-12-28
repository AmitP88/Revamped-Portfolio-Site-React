import React, { Component } from 'react';
import '../css/AboutMe.css';
import ProfilePhoto from '../images/ProfilePhoto.jpg';

export default class AboutMe extends Component {
  render(){
    return (
      <div className="About-Me">
        <div className="content">
          <img src={ProfilePhoto} className="ProfilePhoto" alt="ProfilePhoto"/>
          <p className="message">Hi! Thank you for visiting my website! I'm Amit and I'm an aspiring Front End Developer
          specializing in React and Redux. I love to solve problems, build attractive UIs, and develop interestig projects.
          If you're hiring or you just want to chat, feel free to reach me at any of the links below. </p>        
        </div>
      </div>
    );
  }
}