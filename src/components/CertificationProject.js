import React, { Component } from 'react';
import '../css/CertificationProject.css';

export default class CertificationProject extends Component {
  render(){
    return (
      <div className="certification-project">
        <h3 className="cert-project-name">{this.props.projectName}</h3>
        <div className="cert-project-buttons">
          <a href={this.props.projectDemo} target="_blank" rel="noopener noreferrer">
            <button className="cert-project-demo">Demo</button>        
          </a>
          <a href={this.props.projectRepo} target="_blank" rel="noopener noreferrer">
            <button className="cert-project-repo">Repo</button>        
          </a>        
        </div>
      </div>
    );
  }
}