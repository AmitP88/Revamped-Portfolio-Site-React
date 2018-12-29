import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './media_queries.css';
import TitlePage from './components/TitlePage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage buttonName="Skills" />
        <Skills buttonName="Projects" />
        <Projects buttonName="Certifications" />
        <Certifications />
        <AboutMe />
        <hr className="aboutme-hr" />
        <Footer />
      </div>
    );
  }
}

export default App;