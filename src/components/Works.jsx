import React from 'react';

const projects = [
  {
    title: "Simple Calculator",
    desc: "A basic calculator built with React. Supports arithmetic operations with responsive design.",
    image: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
    link: "https://calculator-05ei.onrender.com/"
  },
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio site showcasing my frontend projects and experience.",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    link: "https://new-project-cg2t.onrender.com/"
  },
  {
    title: "Money Mate (Finance Tracker)",
    desc: "Track your income, expenses, and balance with real-time updates and monthly history.",
    image: "https://cdn-icons-png.flaticon.com/512/2892/2892756.png",
    link: "https://money-mate2.onrender.com"
  },
  {
    title: "Weather App",
    desc: "Get real-time weather updates using OpenWeatherMap API. Search by city name.",
    image: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    link: "https://weather-app-h18y.onrender.com"
  },
  {
    title: "Task Manager",
    desc: "Manage your daily tasks with filters, add/delete functionality, and status updates.",
    image: "https://cdn-icons-png.flaticon.com/512/3145/3145765.png",
    link: "https://task-manager-cuge.onrender.com"
  },
  {
    title: "To-Do List (Bonus)",
    desc: "A clean, functional to-do list with toggle and delete features using React.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828805.png",
    link: "#" // Replace with your live link if you publish
  }
];

const Works = () => {
  return (
    <section className="works" id='works'>
      <div className="container">
        <h2>My Latest Works</h2>
        <div className="project-grid">
          {projects.map((proj, i) => (
            <a
              key={i}
              className="project-cards"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proj.image} alt={proj.title} />
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
