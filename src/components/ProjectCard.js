import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
              <h3 className="projectName">{this.props.projectName}</h3>
              <p className="description">{this.props.description}</p>
              <FontAwesomeIcon className="arrow"  icon={faAngleRight} size="2x" /> 
            </div>
            <div className="flip-card-back">
                <h3 className="techList-title">Tech Used</h3>
                <ul>{this.props.techUsed}</ul>
                <div className="Card-Demo-button">
                    <a href={this.props.demoLink} className="btn btn-white" target="_blank" rel="noopener noreferrer">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                    <a href={this.props.repoLink} className="btn btn-white" target="_blank" rel="noopener noreferrer">Repo</a>                
                </div> 
            </div>
          </div>
        </div>
      )
    }
  }