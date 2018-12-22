import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import '../css/Projects.css';
import ProjectCard from '../components/ProjectCard';

export default class Projects extends Component {
    render(){
        return (
            <div className="Projects-container">
                <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
                    <h1 className="Projects-title">PROJECTS</h1>
                </Animated>
                <div className="cards-container">
                    <div className="cards-row">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="cards-row">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>                
                </div>
                <div className="Certifications-button">
                    <a href="#" className="btn btn-white btn-animated">{this.props.buttonName}</a>                
                </div> 
            </div>
        );
    }
}