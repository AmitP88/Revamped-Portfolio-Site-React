import React, { Component } from 'react';
import '../css/ProjectCard.css';

export default class ProjectCard extends Component {
    render(){
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="project-img" src={this.props.screenshot} alt="Avatar" />
                        <h2 className="projectName">{this.props.projectName}</h2>
                        <p className="description">{this.props.description}</p>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        );
    }
} 