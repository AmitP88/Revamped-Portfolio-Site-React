import React from 'react';
import '../css/SideDrawer.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <button className="closeButton" onClick={props.click}>&#10006;</button>        
        <ul>
          <li><a href='#TitlePage'>Title</a></li>
          <li><a href='#Skills'>Skills</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Certifications'>Certifications</a></li>
          <li><a href='#AboutMe'>About Me</a></li>
        </ul>
      </nav>
    );
}

export default SideDrawer;