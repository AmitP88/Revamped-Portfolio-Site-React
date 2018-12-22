import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TitlePage from './components/TitlePage';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage buttonName="Skills" />
        <Skills />
      </div>
    );
  }
}

export default App;
