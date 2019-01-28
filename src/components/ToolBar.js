import React, { Component } from 'react';
import '../css/ToolBar.css';

import DrawerToggleButton from '../components/DrawerToggleButton';

class ToolBar extends Component {
  state = {
    backgroundColor: 'transparent'
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      this.setState({
        backgroundColor: 'black'
      });
    } else {
      this.setState({
        backgroundColor: 'transparent'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <header className="ToolBar" style={{backgroundColor: this.state.backgroundColor}}>
        <nav className="ToolBar-navigation">
          <div className="toolbar-toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="ToolBar-logo"><a href="/">&lt;A&gt;</a></div>
          <div className="spacer" />
          <div className="ToolBar-navigation-items">
            <ul>
              <li><a href='#Skills'>Skills</a></li>
              <li><a href='#Projects'>Projects</a></li>
              <li><a href='#Certifications'>Certifications</a></li>
              <li><a href='#AboutMe'>About Me</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );    
  }

}

export default ToolBar;