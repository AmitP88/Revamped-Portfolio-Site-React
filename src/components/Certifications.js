import React, { Component } from 'react';
import '../css/Certifications.css';
import CertCard from '../components/CertCard';
import certificationData from '../data/certificationsData';

export default class Certifications extends Component {
  render(){
    return (
      <div className="certifications-container">
        <h1 className="certifications-title">CERTIFICATIONS</h1>
        <CertCard certImg={certificationData[0].certImg} />
      </div>
    );
  }
}