import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './media_queries.css';
import ToolBar from './components/ToolBar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import TitlePage from './components/TitlePage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    });
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
        {backdrop}
        <TitlePage buttonName="Skills" id="TitlePage" />
        <Skills buttonName="Projects" id="Skills" />
        <Projects buttonName="Certifications" id="Projects" />
        <Certifications id="Certifications" />
        <AboutMe id="AboutMe" />
        <hr className="aboutme-hr" />
        <Footer />
      </div>
    );
  }
}

export default App;