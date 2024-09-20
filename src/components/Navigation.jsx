import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DayNightToggle from './DayNightToggle';

function Navigation({ theme, toggleTheme }) {
  return (
    <Navbar 
      expand="lg" 
      className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
    >
      <Container fluid>
        <Navbar.Brand id="navbar-brand" as={Link} to="/">Apogee Dev</Navbar.Brand>

        {/* DayNightToggle visible to the left of the dropdown only on small screens */}
        <div className="d-flex align-items-center d-lg-none">
          <DayNightToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Dropdown for small screens */}
        <NavDropdown
          title="Menu"
          id="small-screen-menu"
          className={`d-lg-none ms-2 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        >
          <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/experience">Experience</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/projects">Projects</NavDropdown.Item>
        </NavDropdown>

        {/* Regular Nav links for larger screens */}
        <Navbar.Collapse id="navbar-nav" className="d-lg-flex justify-content-between">
          <Nav className="mx-auto d-flex justify-content-center" style={{ width: '40%' }}>
            <Nav.Link as={Link} to="/about" style={{ marginRight: '1.5rem' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/experience" className="mx-4">Experience</Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ marginLeft: '1.5rem' }}>Projects</Nav.Link>
          </Nav>

          {/* DayNightToggle visible only on larger screens */}
          <div className="d-none d-lg-flex align-items-center">
            <DayNightToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
