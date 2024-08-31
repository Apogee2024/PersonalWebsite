import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DayNightToggle from './DayNightToggle';

function Navigation({ theme, toggleTheme }) {
  return (
    <nav id='navbar' className="navbar navbar-expand-lg container-fluid position-relative">
      <Link id="navbar-brand" className="navbar-brand" to="/">Apogee</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center position-absolute start-50 translate-middle-x" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" id='About' to="/about">About</Link>
          </li>
          <li className="nav-item mx-4">
            <Link className="nav-link" id='Experience' to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id='Projects' to="/projects">Projects</Link>
          </li>
          <li>
            <DayNightToggle theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
