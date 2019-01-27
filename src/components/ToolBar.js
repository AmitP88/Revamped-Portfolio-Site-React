import React from 'react';
import '../css/ToolBar.css';

import DrawerToggleButton from '../components/DrawerToggleButton';

const ToolBar = (props) => {
  return (
    <header className="ToolBar">
      <nav className="ToolBar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="ToolBar-logo"><a href="/">&lt;A&gt;</a></div>
        <div className="spacer" />
        <div className="ToolBar-navigation-items">
          <ul>
            <li><a href='/'>Skills</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>Certifications</a></li>
            <li><a href='/'>About Me</a></li>
          </ul>        
        </div>
      </nav>      
    </header>
  );
}

export default ToolBar;