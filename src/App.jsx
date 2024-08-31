import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import Navigation from './components/Navigation';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(null); // Start with null to indicate loading
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Determine the user's preferred theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
      document.getElementById('root').style.visibility = 'visible';
    }
  }, [theme]);

  const toggleTheme = () => {
    const elementsToTransition = [
      document.body,
      document.getElementById('root'),
      ...document.querySelectorAll('.navbar, #navbar-brand, #About, #Projects, #Experience, h1, h2, h3, h4, h5, h6, p, a, li, footer, header, button'),
    ];
  
    elementsToTransition.forEach((el) => el.classList.add('theme-transition'));
  
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  
    // Remove the class after the transition ends
    setTimeout(() => {
      elementsToTransition.forEach((el) => el.classList.remove('theme-transition'));
    }, 700); // Match this duration to the CSS transition duration
  };
  
  return (
    <div className="app">
      <Router>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<HomePage theme={theme} />} />
          <Route path='/about' element={<AboutPage theme={theme} />} />
          <Route path='/experience' element={<RegistrationPage theme={theme} />} />
          <Route path='/projects' element={<ProjectPage theme={theme} />} />
        </Routes>
      </Router>
      
      <footer>©{year} Sean Brady </footer>
    </div>
  );
}

export default App;
