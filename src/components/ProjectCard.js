import React, { Component } from 'react';
import '../css/ProjectCard.css';

export default class ProjectCard extends Component {
    render(){
        return (
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
        );
    }
} 