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
          <a href='#Title'><li>Title</li></a>
          <a href='#Skills'><li>Skills</li></a>
          <a href='#Projects'><li>Projects</li></a>
          <a href='#Certifications'><li>Certifications</li></a>
          <a href='#AboutMe'><li>About Me</li></a>
        </ul>
      </nav>
    );
}

export default SideDrawer;