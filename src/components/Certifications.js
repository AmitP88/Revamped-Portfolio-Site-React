import React, { Component } from 'react';
import '../css/Certifications.css';
import CertCard from '../components/CertCard';
import certificationData from '../data/certificationsData';

export default class Certifications extends Component {
  render(){
    return (
      <div className="certifications-container">
        <h1 className="certifications-title">CERTIFICATIONS</h1>
        <CertCard 
          certImg={certificationData[0].certImg}
          project_1_Name={certificationData[0].project1.Name}
          project_2_Name={certificationData[0].project2.Name}
          project_3_Name={certificationData[0].project3.Name}
          project_4_Name={certificationData[0].project4.Name}
          project_5_Name={certificationData[0].project5.Name}
        />
      </div>
    );
  }
}