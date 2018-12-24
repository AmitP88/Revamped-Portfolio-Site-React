import React, { Component } from 'react';
import '../css/ProjectCard.css';

export default class ProjectCard extends Component { 
    render() {
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
                <ul>{this.props.techUsed}</ul>
                <div className="Card-Demo-button">
                    <a href="#" className="btn btn-white btn-animated">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                    <a href="#" className="btn btn-white btn-animated">Repo</a>                
                </div> 
            </div>
          </div>
        </div>
      )
    }
  }