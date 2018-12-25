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

          </div>
        </div>
      </div>
    );
  }
}