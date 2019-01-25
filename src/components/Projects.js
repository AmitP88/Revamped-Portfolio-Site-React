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
            pomodoro : ['HTML5', 'CSS3', 'JavaScript(ES6)', 'SVG'],
            khmerfamilycafe: ['HTML5', 'CSS3', 'Flickity API', 'Bootstrap', 'JavaScript(ES5)'],
            heatmap: ['HTML5', 'CSS3', 'D3', 'JavaScript(ES6)'],
            wikiviewer: ['HTML5', 'CSS3', 'jQuery', 'AJAX']
        }

        const techList = {
            tictactoe : projectTech.tictactoe.map((item, index) => <li key={index} className="techListItem">{item}</li>),
            simon : projectTech.simon.map((item, index) => <li key={index} className="techListItem">{item}</li>),
            pomodoro : projectTech.pomodoro.map((item, index) => <li key={index} className="techListItem">{item}</li>),
            khmerfamilycafe : projectTech.khmerfamilycafe.map((item, index) => <li key={index} className="techListItem">{item}</li>),
            heatmap : projectTech.heatmap.map((item, index) => <li key={index} className="techListItem">{item}</li>),
            wikiviewer : projectTech.wikiviewer.map((item, index) => <li key={index} className="techListItem">{item}</li>)
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
                            demoLink={'https://amitp88.github.io/Tic-Tac-Toe-React-Redux/'}
                            repoLink={'https://github.com/AmitP88/Tic-Tac-Toe-React-Redux'}
                        />
                        <ProjectCard
                            screenshot={Simon}
                            projectName='Simon Game'
                            description='A classic Simon game with a modern style to it.
                                         The game can be set to Hard mode for a greater challenge.'
                            techUsed={techList.simon}
                            demoLink={'https://amitp88.github.io/Simon-Game-React-Redux/'}
                            repoLink={'https://github.com/AmitP88/Simon-Game-React-Redux'}
                        />
                        <ProjectCard 
                            screenshot={Pomodoro}
                            projectName='Pomodoro Timer'
                            description='A timer to set one countdown for work time,
                                         and one for break time that starts once work timer ends and vice versa.
                                         Comes with SVG countdown rings.'
                            techUsed={techList.pomodoro}
                            demoLink={'https://amitp88.github.io/Pomodoro-Timer/'}
                            repoLink={'https://github.com/AmitP88/Pomodoro-Timer'}
                        />
                    </div>
                    <div className="cards-row">
                        <ProjectCard 
                            screenshot={KhmerFamilyCafe}
                            projectName='Restaurant website'
                            description='A website I made for the owner of a cambodian restaurant
                                         called Khmer Family Cafe located in Fresno, CA.'
                            techUsed={techList.khmerfamilycafe}
                            demoLink={'http://www.khmerfamilycafe.com/'}
                            repoLink={'https://github.com/AmitP88/Khmer-Family-Cafe'}
                        />
                        <ProjectCard 
                            screenshot={HeatMap}
                            projectName='D3 Heat Map'
                            description='A graph developed using D3.js representing the gradual increase of global temperatures over the past 250 years.'
                            techUsed={techList.heatmap}
                            demoLink={'https://amitp88.github.io/D3-Heat-Map/'}
                            repoLink={'https://github.com/AmitP88/D3-Heat-Map'}
                        />
                        <ProjectCard 
                            screenshot={WikiViewer}
                            projectName='Wiki Viewer'
                            description='A search engine for finding posts on Wikipedia using Wikipedias API along with AJAX.'
                            techUsed={techList.wikiviewer}
                            demoLink={'https://amitp88.github.io/Wiki-Viewer/'}
                            repoLink={'https://github.com/AmitP88/Wiki-Viewer'}
                        />
                    </div>                
                </div>
            </div>
        );
    }
}