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
          <a href='#Title' onClick={props.click}><li>Title</li></a>
          <a href='#Skills' onClick={props.click}><li>Skills</li></a>
          <a href='#Projects' onClick={props.click}><li>Projects</li></a>
          <a href='#Certifications' onClick={props.click}><li>Certifications</li></a>
          <a href='#AboutMe' onClick={props.click}><li>About Me</li></a>
        </ul>
      </nav>
    );
}

export default SideDrawer;