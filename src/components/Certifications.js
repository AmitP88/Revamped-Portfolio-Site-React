import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import Certification from '../components/Certification';
import '../css/Certifications.css';

// import Certification images
import ResponsiveDesignCert from '../images/ResponsiveDesignCert.png';

let certifications = [
  {
    certName: 'Responsive Web Design Certification',
    certImg : ResponsiveDesignCert,
    project1: {
      Name: 'Tribute Page',
      Demo: 'https://amitp88.github.io/Tribute-Page/',
      Repo: 'https://github.com/AmitP88/Tribute-Page'
    },
    project2: {
      Name: 'Survey Form',
      Demo: 'https://amitp88.github.io/Survey-Form/',
      Repo: 'https://github.com/AmitP88/Survey-Form'
    },
    project3: {
      Name: 'Product Landing Page',
      Demo: 'https://amitp88.github.io/Product-Landing-Page/',
      Repo: 'https://github.com/AmitP88/Product-Landing-Page'
    },
    project4: {
      Name: 'Technical Documentation Page',
      Demo: 'https://amitp88.github.io/Technical-Documentation-Page/',
      Repo: 'https://github.com/AmitP88/Technical-Documentation-Page'
    },
    project5: {
      Name: 'A Personal Portfolio Webpage',
      Demo: 'https://amitp88.github.io/Portfolio-Webpage/',
      Repo: 'https://github.com/AmitP88/Portfolio-Webpage'
    }
  }
];

export default class Certifications extends Component {
  render(){
    return(
      <div className="Certifications-container">
        <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
          <h1 className="Certifications-title">CERTIFICATIONS</h1>
        </Animated>
        <Certification 
          screenshot={certifications[0].certImg}
          imgAlt={certifications[0].certName}
          project_1_Name={certifications[0].project1.Name}
          project_2_Name={certifications[0].project2.Name}
          project_3_Name={certifications[0].project3.Name}
          project_4_Name={certifications[0].project4.Name}
          project_5_Name={certifications[0].project5.Name}
        />
      </div>
    );
  }
}