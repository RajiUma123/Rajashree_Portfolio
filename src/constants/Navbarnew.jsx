// src/components/Navbar.js

import React from 'react';
import '../../src/Navbar.css'

function Navbarnew() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#technologies" className="navbar-link" data-hover="My Skills">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="#experience" className="navbar-link" data-hover="My Experience">Work Experience</a>
        </li>
        <li className="navbar-item">
          <a href="#Project" className="navbar-link" data-hover="My Projects">Project</a>
        </li>
        {/* <li className="navbar-item">
          <a href="#Certification" className="navbar-link" data-hover="My Certification">Certifications</a>
        </li> */}
        <li className="navbar-item">
          <a href="#contactme" className="navbar-link" data-hover="Get in Touch">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbarnew;
