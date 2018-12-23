import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import '../css/Projects.css';
import ProjectCard from '../components/ProjectCard';

// import project images
import TicTacToe from '../images/TicTacToe.png';
import Simon from '../images/Simon.png';
import Pomodoro from '../images/Pomodoro.png';
import KhmerFamilyCafe from '../images/KhmerFamilyCafe.png';
import HeatMap from '../images/HeatMap.png';
import WikiViewer from '../images/WikiViewer.png';

export default class Projects extends Component {
    render(){
        return (
            <div className="Projects-container">
                <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
                    <h1 className="Projects-title">PROJECTS</h1>
                </Animated>
                <div className="cards-container">
                    <div className="cards-row">
                        <ProjectCard
                            screenshot={TicTacToe}
                            projectName='Unbeatable Tic Tac Toe'
                            description='An unbeatable tic tac toe game built with React and Redux.
                                         The unbeatable AI was developed using the minimax algorithm.'
                            techUsed={['React', 'Redux', 'CSS3']}
                        />
                        <ProjectCard
                            screenshot={Simon}
                            projectName='Simon Game'
                            description='A classic Simon game with a modern style to it.
                                         The game can be set to Hard mode for a greater challenge.'
                            techUsed={['React', 'Redux', 'CSS3']}
                        />
                        <ProjectCard 
                            screenshot={Pomodoro}
                            projectName='Pomodoro Timer'
                            description='A timer to set one countdown for work time,
                                         and one for break time that starts once work timer ends.'
                        />
                    </div>
                    <div className="cards-row">
                        <ProjectCard 
                            screenshot={KhmerFamilyCafe}
                            projectName='Restaurant website'
                            description='A website I made for the owner of a cambodian restaurant
                                         called Khmer Family Cafe located in Fresno, CA.'
                        />
                        <ProjectCard 
                            screenshot={HeatMap}
                            projectName='D3 Heat Map'
                            description='A graph developed using D3.js representing the gradual increase of global temperatures over the past 250 years.'
                        />
                        <ProjectCard 
                            screenshot={WikiViewer}
                            projectName='Wiki Viewer'
                            description='A search engine for finding posts on Wikipedia using Wikipedias API along with AJAX.'
                        />
                    </div>                
                </div>
                <div className="Certifications-button">
                    <a href="#" className="btn btn-white btn-animated">{this.props.buttonName}</a>                
                </div> 
            </div>
        );
    }
}