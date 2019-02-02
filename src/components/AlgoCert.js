import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../css/Cert.css';

export default class AlgoCert extends Component {
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
          <img className="certImg" src={this.props.certImg} alt="cert-background-img"/>
          <button onClick={this.onOpenModal} className="cert-link cert-button cert-button-lightgreen" target="_blank" rel="noopener noreferrer">PROJECTS</button>       
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_1_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_1_solutionLink} className="cert-button AlgoCert-button-white" target="_blank" rel="noopener noreferrer">Solution</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_2_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_2_solutionLink} className="cert-button AlgoCert-button-white" target="_blank" rel="noopener noreferrer">Solution</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_3_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_3_solutionLink} className="cert-button AlgoCert-button-white" target="_blank" rel="noopener noreferrer">Solution</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_4_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_4_solutionLink} className="cert-button AlgoCert-button-white" target="_blank" rel="noopener noreferrer">Solution</a>
            </div>
          </div>
          <div className="cert-project">
            <h3 className="cert-project-name">{this.props.project_5_Name}</h3>
            <div className="buttons-container">
              <a href={this.props.project_5_solutionLink} className="cert-button AlgoCert-button-white" target="_blank" rel="noopener noreferrer">Solution</a>
            </div>
          </div>
          <a href={this.props.certLink} className="cert-link cert-button cert-button-lightgreen" target="_blank" rel="noopener noreferrer">Certification</a> 
        </Modal>
      </div>
    );
  }
}