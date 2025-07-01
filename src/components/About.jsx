import React from 'react';

const About = () => {
  return (
    <section className='about-section' id='about'>
      <div className="container">
        <div className="about-page">
          <div className="about-me">
            <h1>About Me</h1>
            <p>
              Hi! I'm Abhishek Atter, a passionate Full Stack Developer who loves building
              clean, functional, and user-friendly web applications. I specialize in React,
              JavaScript, HTML/CSS, and enjoy working on real-world projects that solve
              practical problems.
            </p>
            {/* <h2>🚀 Goals</h2>
            <p>
              My goal is to continuously learn, grow, and contribute to meaningful web
              applications. I love solving problems, improving UI/UX, and delivering
              high-quality frontend experiences.
            </p> */}
          </div>

          <div className="skills-goal">
            <h2>Skills</h2>
            <ul>
              <li>React.js / JavaScript / TypeScript</li>
              <li>HTML5 / CSS3 / Responsive Design</li>
              <li>Node.js / Express / MongoDB</li>
              <li>API Integration / Axios / REST</li>
              <li>Version Control with Git & GitHub</li>
            </ul>

            {/* <h2>📫 Contact</h2>
            <p className='contactsss'>
              Feel free to reach out at <a href="tel:7807050501">78070-50501</a> or connect
              via my portfolio.
            </p> */}
          </div>
        </div>
      </div>

    </section>

  );
};

export default About;
