import React, { Component } from 'react';
import '../css/ProjectCard.css';

export default class ProjectCard extends Component { 
    render() {
        let tech = this.props.techUsed;
        console.log(typeof tech);

      return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="project-img"
                src={this.props.screenshot}
                alt="Avatar"
              />
              <h2 className="projectName">{this.props.projectName}</h2>
              <p className="description">{this.props.description}</p>
            </div>
            <div className="flip-card-back">
                <h3>Tech Used:</h3>
                <div>{this.props.techUsed}</div>
            </div>
          </div>
        </div>
      )
    }
  }