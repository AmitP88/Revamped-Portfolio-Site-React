import React, { Component } from 'react';
import '../css/Cert.css';

export default class Cert extends Component {
  render(){
    return (
      <div className="cert-container">
        <div className="cert">
          <img className="certImg" src={this.props.certImg} alt=""/>
          <a href={this.props.certLink} className="cert-link cert-button cert-button-lightgreen cert-button-animated" target="_blank" rel="noopener noreferrer">Projects</a>       
        </div>

      </div>
    );
  }
}

/*

  <img className="certImg" src={this.props.certImg} alt=""/>


  <div className="buttons-container">
    <a href={this.props.project_1_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
    <a href={this.props.project_1_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
  </div>

  <a href={this.props.certLink} className="cert-link cert-button cert-button-lightgreen cert-button-animated" target="_blank" rel="noopener noreferrer">Certification</a> 

*/