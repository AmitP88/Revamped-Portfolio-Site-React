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
        const projectTech = {
            tictactoe : ['React', 'Redux', 'CSS3', 'JavaScript(ES6)'],
            simon : ['React', 'Redux', 'CSS3', 'JavaScript(ES6)'],
            pomodoro : ['React', 'Redux', 'CSS3', 'JavaScript(ES6)'],
            khmerfamilycafe: ['HTML5', 'CSS3', 'Flickity API', 'Bootstrap', 'JavaScript(ES5)'],
            heatmap: ['HTML5', 'CSS3', 'D3', 'JavaScript(ES6)'],
            wikiviewer: ['HTML5', 'CSS3', 'jQuery', 'AJAX']
        }

        const techList = {
            tictactoe : projectTech.tictactoe.map((item, index) => <li key={index}>{item}</li>),
            simon : projectTech.simon.map((item, index) => <li key={index}>{item}</li>),
            pomodoro : projectTech.pomodoro.map((item, index) => <li key={index}>{item}</li>),
            khmerfamilycafe : projectTech.khmerfamilycafe.map((item, index) => <li key={index}>{item}</li>),
            heatmap : projectTech.heatmap.map((item, index) => <li key={index}>{item}</li>),
            wikiviewer : projectTech.wikiviewer.map((item, index) => <li key={index}>{item}</li>)
        }



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
                            techUsed={techList.tictactoe}
                        />
                        <ProjectCard
                            screenshot={Simon}
                            projectName='Simon Game'
                            description='A classic Simon game with a modern style to it.
                                         The game can be set to Hard mode for a greater challenge.'
                                         techUsed={techList.simon}
                        />
                        <ProjectCard 
                            screenshot={Pomodoro}
                            projectName='Pomodoro Timer'
                            description='A timer to set one countdown for work time,
                                         and one for break time that starts once work timer ends.'
                            techUsed={techList.pomodoro}
                        />
                    </div>
                    <div className="cards-row">
                        <ProjectCard 
                            screenshot={KhmerFamilyCafe}
                            projectName='Restaurant website'
                            description='A website I made for the owner of a cambodian restaurant
                                         called Khmer Family Cafe located in Fresno, CA.'
                            techUsed={techList.khmerfamilycafe}
                        />
                        <ProjectCard 
                            screenshot={HeatMap}
                            projectName='D3 Heat Map'
                            description='A graph developed using D3.js representing the gradual increase of global temperatures over the past 250 years.'
                            techUsed={techList.heatmap}
                        />
                        <ProjectCard 
                            screenshot={WikiViewer}
                            projectName='Wiki Viewer'
                            description='A search engine for finding posts on Wikipedia using Wikipedias API along with AJAX.'
                            techUsed={techList.wikiviewer}
                        />
                    </div>                
                </div>
                <div className="Certifications-button">
                    <a href="#" className="btn btn-green btn-animated">{this.props.buttonName}</a>                
                </div> 
            </div>
        );
    }
}