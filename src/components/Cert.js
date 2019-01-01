import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../css/Cert.css';

export default class Cert extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    return (
      <div className="cert-container">
        <div className="cert">
          <img className="certImg" src={this.props.certImg} alt=""/>
          <button onClick={this.onOpenModal} className="cert-link cert-button cert-button-lightgreen cert-button-animated" target="_blank" rel="noopener noreferrer">PROJECTS</button>       
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_1_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_1_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project_1_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_2_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_2_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project_2_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_3_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_3_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project_3_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_4_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_4_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project_4_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_5_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_5_demoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={this.props.project_5_repoLink} className="cert-button cert-button-white cert-button-animated" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
          <a href={this.props.certLink} className="cert-link cert-button cert-button-lightgreen cert-button-animated" target="_blank" rel="noopener noreferrer">Certification</a> 
        </Modal>
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