import React, { Component } from 'react';
import '../css/ProjectCard.css';
import '../css/media_queries.css';

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
                <h3 className="techList-title">Tech Used</h3>
                <ul>{this.props.techUsed}</ul>
                <div className="Card-Demo-button">
                    <a href={this.props.demoLink} className="btn btn-white btn-animated" target="_blank" rel="noopener noreferrer">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                    <a href={this.props.repoLink} className="btn btn-white btn-animated" target="_blank" rel="noopener noreferrer">Repo</a>                
                </div> 
            </div>
          </div>
        </div>
      )
    }
  }