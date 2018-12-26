import React, { Component } from 'react';
import '../css/CertCard.css';

export default class CertCard extends Component {
  render(){
    return (
      <div className="flip-cert">
        <div className="flip-cert-inner">
          <div className="flip-cert-front">
            <img className="certImg" src={this.props.certImg} alt=""/>
          </div>
          <div className="flip-cert-back">
            <h1>Projects</h1>


            <div className="cert-projects-container">
              <div className="cert-project">
                <h3 className="cert-project-name">{this.props.project_1_Name}</h3>
                <div className="buttons-container">
                  <a href={this.props.project_1_demoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={this.props.project_1_repoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
              </div>
              <div className="cert-project">
                <h3 className="cert-project-name">{this.props.project_2_Name}</h3>
                <div className="buttons-container">
                  <a href={this.props.project_2_demoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={this.props.project_2_repoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
              </div>
              <div className="cert-project">
                <h3 className="cert-project-name">{this.props.project_3_Name}</h3>
                <div className="buttons-container">
                  <a href={this.props.project_3_demoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={this.props.project_3_repoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
              </div>
              <div className="cert-project">
                <h3 className="cert-project-name">{this.props.project_4_Name}</h3>
                <div className="buttons-container">
                  <a href={this.props.project_4_demoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={this.props.project_4_repoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Repo</a> 
                </div>
              </div>
              <div className="cert-project">
                <h3 className="cert-project-name">{this.props.project_5_Name}</h3>
                <div className="buttons-container">
                  <a href={this.props.project_5_demoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={this.props.project_5_repoLink} className="button button-white button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}