import React from 'react';


const Projects = [
  {
    name: 'Simple Calculator',
    image: 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png',
    link: 'https://calculator-05ei.onrender.com/'
  },
  {
    name: 'Portfolio Project',
    image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png',
    link: 'https://new-project-cg2t.onrender.com/'
  },
  {
    name: 'Money Mate (Finance Tracker)',
    image: 'https://cdn-icons-png.flaticon.com/512/2892/2892756.png',
    link: 'https://money-mate2.onrender.com'
  },
  {
    name: 'Weather App',
    image: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
    link: 'https://weather-app-h18y.onrender.com'
  },
  {
    name: 'Task Manager',
    image: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png',
    link: 'https://task-manager-cuge.onrender.com'
  }
];

const Project = () => {
  return (
    <section className="experience" id='project'>
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-gallery">
          {Projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Project;
