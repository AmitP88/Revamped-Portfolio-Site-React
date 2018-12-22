import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import '../css/Projects.css';

export default class Projects extends Component {
    render(){
        return (
            <div className="Projects-container">
                <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
                    <h1 className="Projects-title">PROJECTS</h1>
                </Animated>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="project-img" src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/11/zelda-ocarina-of-time-920x584.jpg" alt="Avatar" />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}