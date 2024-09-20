import React from 'react';
import './ExperiencePage.css';

function ExperiencePage({ theme }) {
  const experiences = [
    {
      id: 'experience-1',
      title: 'Software Development Projects',
      company: 'Self-Directed',
      duration: '2021 - Present',
      description: `
        - Transitioned to a software development career after completing a Python bootcamp.
        - Developed various automation tools, including a cold email automation bot and an invoice data extractor.
        - Created a full-stack exercise tracking app using React and Django, managing CRUD operations and user authentication.
        - Built and refined a standards library catalog with full CRUD functionalities, file uploads, and user-specific content management.
      `,
    },
    {
      id: 'experience-2',
      title: 'Maintenance Technician',
      company: 'Tesla',
      duration: '2022 - Present',
      description: `
        - Developed custom software to automate daily tasks, perform system recovery, and enhance production line uptime.
        - Automated routine tasks using Python, significantly reducing manual input and errors.
        - Troubleshot and resolved complex mechanical, electrical, and software issues, boosting overall efficiency.
        - Implemented auto-login, autostart, and recovery processes on production computers, reducing downtime.
        - Fabricated hardware components such as jigs and brackets to optimize operational performance.
      `,
    },
    {
      id: 'experience-3',
      title: 'Fill and Pack Technician',
      company: 'Roche',
      duration: '2019 - 2021',
      description: `
        - Conducted quality control tests and performed daily fill and packaging tasks with precision and accuracy.
        - Maintained a high level of productivity while ensuring compliance with company standards.
        - Worked closely with cross-functional teams to improve operational processes and product quality.
      `,
    },
  ];

  return (
    <div className={`container py-5 experience-page ${theme}`}>
      <h2 className="mb-4">Experience</h2>
      <div className="row">
        {experiences.map((experience) => (
          <div className="col-12 mb-4" key={experience.id}>
            <div className="experience-card h-100">
              <div className="card-body">
                <h5 className="experience-card-title">{experience.title}</h5>
                <h6 className="experience-card-subtitle mb-2">{experience.company}</h6>
                <p className="experience-card-subtitle mb-2">{experience.duration}</p>
                <p className="experience-card-text">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
