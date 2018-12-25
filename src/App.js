import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../src/css/media_queries.css';
import TitlePage from './components/TitlePage';
import Skills from './components/Skills';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage buttonName="Skills" />
        <Skills buttonName="Projects" />
        <Projects buttonName="Certifications" />
      </div>
    );
  }
}

export default App;
