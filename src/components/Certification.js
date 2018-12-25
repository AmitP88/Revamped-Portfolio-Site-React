import React, { Component } from 'react';
import '../css/Certification.css';
import CertificationProject from '../components/CertificationProject';

export default class Certification extends Component {
  render(){
    return (
      <div className="Certification">
        <img className="cert-screenshot" src={this.props.screenshot} alt={this.props.imgAlt}/>
        <div className="cert-projects-container">
          <h2 className="cert-projects-title">Certification Projects</h2>
          <CertificationProject 
            projectName={this.props.project_1_Name}
          />
          <CertificationProject 
            projectName={this.props.project_2_Name}
          />
          <CertificationProject 
            projectName={this.props.project_3_Name}
          />
          <CertificationProject 
            projectName={this.props.project_4_Name}
          />
          <CertificationProject 
            projectName={this.props.project_5_Name}
          />
        </div>
      </div>
    );
  }
} 