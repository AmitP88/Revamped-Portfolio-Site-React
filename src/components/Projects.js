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
            </div>
        );
    }
}