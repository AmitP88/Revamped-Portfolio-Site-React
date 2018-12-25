import React, { Component } from 'react';
import '../css/CertificationProject.css';

export default class CertificationProject extends Component {
  render(){
    return (
      <div className="certification-project">
        <h3 className="cert-project-name">{this.props.projectName}</h3>
      </div>
    );
  }
}