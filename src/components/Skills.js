import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

export default class Skills extends Component {
    render(){
        return (
            <div className="Skills-container">
                <Animated className="skills-animated" animationIn="fadeInDown" isVisible={true}>
                    <h1 className="Skills-title">SKILLS</h1>             
                </Animated>
                <div className="row">
                    <div className="skill"></div>
                    <div className="skill"></div>
                    <div className="skill"></div>
                    <div className="skill"></div>
                    <div className="skill"></div>
                </div>               
            </div>
        );
    }
}