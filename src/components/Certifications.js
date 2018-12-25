import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import Certification from '../components/Certification';
import '../css/Certifications.css';
import certificationsData from '../data/certificationsData';

export default class Certifications extends Component {
  render(){
    return(
      <div className="Certifications-container">
        <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
          <h1 className="Certifications-title">CERTIFICATIONS</h1>
        </Animated>
        <Certification 
          screenshot={certificationsData[0].certImg}
          imgAlt={certificationsData[0].certName}
          project_1_Name={certificationsData[0].project1.Name}
          project_1_Demo={certificationsData[0].project1.Demo}
          project_1_Repo={certificationsData[0].project1.Repo}

          project_2_Name={certificationsData[0].project2.Name}
          project_2_Demo={certificationsData[0].project2.Demo}
          project_2_Repo={certificationsData[0].project2.Repo}

          project_3_Name={certificationsData[0].project3.Name}
          project_3_Demo={certificationsData[0].project3.Demo}
          project_3_Repo={certificationsData[0].project3.Repo}

          project_4_Name={certificationsData[0].project4.Name}
          project_4_Demo={certificationsData[0].project4.Demo}
          project_4_Repo={certificationsData[0].project4.Repo}

          project_5_Name={certificationsData[0].project5.Name}
          project_5_Demo={certificationsData[0].project5.Demo}
          project_5_Repo={certificationsData[0].project5.Repo}
        />
      </div>
    );
  }
}