import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css'

function ProjectsPage({ theme }) {
  const projects = [
    {
      id: 'project-2',
      title: 'Cold Email Tool',
      year: 2024,
      description: 'A Cold Email Automation tool that drafts and schedules personalized cold emails to generate leads.',
      url: 'https://github.com/Apogee2024/ColdEmailAutomation',
    },
    {
      id: 'project-3',
      title: 'Invoice Entry Tool',
      year: 2024,
      description: 'An invoice entry tool using Python, reducing data entry time and errors. This is the data extraction part ',
      url: 'https://github.com/Apogee2024/RInvoice-Data-Extraction',

    },
    {
      id: 'project-4',
      title: 'Daily Task Completion Tool',
      year: 2024,
      description: 'Automated daily tasks using Python, improving operational efficiency.',
      url: 'https://github.com/Apogee2024/TDailyTask/',
    },
    {
      id: 'project-5',
      title: 'Exercises Full Stack App',
      year: 2024,
      description: 'Built a full-stack React app for managing and tracking exercises.',
      url: 'https://github.com/Apogee2024/ExercisesApp',
    },
    {
        id: 'project-6',
        title: 'Snake Turtle Game',
        year: 2024,
        description: 'built snake in turtle using OOP to demonstrate the benefits of OOP',
        url: 'https://github.com/Apogee2024/TurtleSnake',
      },
      {
        id: 'project-1',
        title: 'Fluids Catalog Portal',
        year: 2024,
        description: 'A Django-based catalog for fluid references with full CRUD functionality',
        url: 'https://github.com/Apogee2024/',
      },
  ];

  return (
    <div className={`container py-5 projects-page ${theme}`}>
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer"> View Project </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
