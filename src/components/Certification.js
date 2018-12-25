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
            projectDemo={this.props.project_1_Demo}
            projectRepo={this.props.project_1_Repo}
          />
          <CertificationProject 
            projectName={this.props.project_2_Name}
            projectDemo={this.props.project_2_Demo}
            projectRepo={this.props.project_2_Repo}
          />
          <CertificationProject 
            projectName={this.props.project_3_Name}
            projectDemo={this.props.project_3_Demo}
            projectRepo={this.props.project_3_Repo}
          />
          <CertificationProject 
            projectName={this.props.project_4_Name}
            projectDemo={this.props.project_4_Demo}
            projectRepo={this.props.project_4_Repo}
          />
          <CertificationProject 
            projectName={this.props.project_5_Name}
            projectDemo={this.props.project_5_Demo}
            projectRepo={this.props.project_5_Repo}
          />
        </div>
      </div>
    );
  }
} 