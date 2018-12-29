import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import '../css/Skills.css';

// Import logo images
import HTML5_Logo_notext from '../images/HTML_Logo_notext.png';
import CSS3_Logo_notext from '../images/CSS_Logo_notext.png';
import JavaScript_Logo from '../images/JavaScript_Logo.png';
import React_Logo from '../images/React_Logo.png';
import Redux_Logo from '../images/Redux_Logo.png';
import D3_Logo from '../images/D3_Logo.png';

const logos = {
    HTML5: HTML5_Logo_notext,
    CSS3: CSS3_Logo_notext,
    JavaScript: JavaScript_Logo,
    React: React_Logo,
    Redux: Redux_Logo,
    D3: D3_Logo
};

export default class Skills extends Component {
    render(){
        return (
            <div className="Skills-container">
                <Animated className="skills-animated" animationIn="fadeInDown" isVisible={true}>
                    <h1 className="Skills-title">SKILLS</h1>
                </Animated>
                <div className="row">
                    <div className="Skill">
                        <img src={logos.HTML5} className="Skills-Img" alt={Object.keys(logos)[0]} />
                        <h3 className="Skill-name">{Object.keys(logos)[0]}</h3>
                    </div>
                    <div className="Skill">
                        <img src={logos.CSS3} className="Skills-Img" alt={Object.keys(logos)[1]} />
                        <h3 className="Skill-name">{Object.keys(logos)[1]}</h3>
                    </div>
                    <div className="Skill">
                        <img src={logos.JavaScript} className="Skills-Img" alt={Object.keys(logos)[2]} />
                        <h3 className="Skill-name">{Object.keys(logos)[2]}</h3>
                    </div>
                    <div className="Skill">
                        <img src={logos.React} className="Skills-Img" alt={Object.keys(logos)[3]} />
                        <h3 className="Skill-name">{Object.keys(logos)[3]}</h3>
                    </div>
                    <div className="Skill">
                        <img src={logos.Redux} className="Skills-Img" alt={Object.keys(logos)[4]} />
                        <h3 className="Skill-name">{Object.keys(logos)[4]}</h3>
                    </div>
                    <div className="Skill">
                        <img src={logos.D3} className="Skills-Img" alt={Object.keys(logos)[5]} />
                        <h3 className="Skill-name">{Object.keys(logos)[5]}</h3>
                    </div>                    
                </div>          
            </div>
        );
    }
}