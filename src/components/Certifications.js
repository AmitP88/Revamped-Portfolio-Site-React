import React, { Component } from 'react';
import '../css/Certifications.css';
import Cert from './Cert';
import AlgoCert from './AlgoCert';
import certificationData from '../data/certificationsData';

export default class Certifications extends Component {
  render(){
    return (
      <div className="certifications-container">
        <h1 className="certifications-title">CERTIFICATIONS</h1>
        <div className="cert-pair">
          <Cert 
            certImg={certificationData[0].certImg}
            certLink={certificationData[0].certLink}
            project_1_Name={certificationData[0].project1.Name}
            project_2_Name={certificationData[0].project2.Name}
            project_3_Name={certificationData[0].project3.Name}
            project_4_Name={certificationData[0].project4.Name}
            project_5_Name={certificationData[0].project5.Name}

            project_1_demoLink={certificationData[0].project1.Demo}
            project_2_demoLink={certificationData[0].project2.Demo}
            project_3_demoLink={certificationData[0].project3.Demo}
            project_4_demoLink={certificationData[0].project4.Demo}
            project_5_demoLink={certificationData[0].project5.Demo}

            project_1_repoLink={certificationData[0].project1.Repo}
            project_2_repoLink={certificationData[0].project2.Repo}
            project_3_repoLink={certificationData[0].project3.Repo}
            project_4_repoLink={certificationData[0].project4.Repo}
            project_5_repoLink={certificationData[0].project5.Repo}
          />
          <AlgoCert
            certImg={certificationData[1].certImg}
            certLink={certificationData[1].certLink}
            project_1_Name={certificationData[1].project1.Name}
            project_2_Name={certificationData[1].project2.Name}
            project_3_Name={certificationData[1].project3.Name}
            project_4_Name={certificationData[1].project4.Name}
            project_5_Name={certificationData[1].project5.Name}

            project_1_solutionLink={certificationData[1].project1.Solution}
            project_2_solutionLink={certificationData[1].project2.Solution}
            project_3_solutionLink={certificationData[1].project3.Solution}
            project_4_solutionLink={certificationData[1].project4.Solution}
            project_5_solutionLink={certificationData[1].project5.Solution}
          />        
        </div>
        <div className="cert-pair">
          <Cert
            certImg={certificationData[2].certImg}
            certLink={certificationData[2].certLink}
            project_1_Name={certificationData[2].project1.Name}
            project_2_Name={certificationData[2].project2.Name}
            project_3_Name={certificationData[2].project3.Name}
            project_4_Name={certificationData[2].project4.Name}
            project_5_Name={certificationData[2].project5.Name}

            project_1_demoLink={certificationData[2].project1.Demo}
            project_2_demoLink={certificationData[2].project2.Demo}
            project_3_demoLink={certificationData[2].project3.Demo}
            project_4_demoLink={certificationData[2].project4.Demo}
            project_5_demoLink={certificationData[2].project5.Demo}

            project_1_repoLink={certificationData[2].project1.Repo}
            project_2_repoLink={certificationData[2].project2.Repo}
            project_3_repoLink={certificationData[2].project3.Repo}
            project_4_repoLink={certificationData[2].project4.Repo}
            project_5_repoLink={certificationData[2].project5.Repo}
          />
          <Cert
            certImg={certificationData[3].certImg}
            certLink={certificationData[3].certLink}
            project_1_Name={certificationData[3].project1.Name}
            project_2_Name={certificationData[3].project2.Name}
            project_3_Name={certificationData[3].project3.Name}
            project_4_Name={certificationData[3].project4.Name}
            project_5_Name={certificationData[3].project5.Name}

            project_1_demoLink={certificationData[3].project1.Demo}
            project_2_demoLink={certificationData[3].project2.Demo}
            project_3_demoLink={certificationData[3].project3.Demo}
            project_4_demoLink={certificationData[3].project4.Demo}
            project_5_demoLink={certificationData[3].project5.Demo}

            project_1_repoLink={certificationData[3].project1.Repo}
            project_2_repoLink={certificationData[3].project2.Repo}
            project_3_repoLink={certificationData[3].project3.Repo}
            project_4_repoLink={certificationData[3].project4.Repo}
            project_5_repoLink={certificationData[3].project5.Repo}
          />        
        </div>
      </div>
    );
  }
}