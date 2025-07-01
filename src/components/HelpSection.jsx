import React from "react";

const HelpSection = () => {
  return (
    <section className="helping-section" id="service">

      <div className="container">
        <div className="help-section">
          <div className="description">
            <h2>What do I help?</h2>
            <p>
              I will help you with finding a solution and solve your problems. We
              use process design to create digital products. Besides that, also help
              their business.
            </p>
            <p>
              We use process design to create digital products. Besides that, also
              help their business.
            </p>


          </div>
          <div className="services">
            <div className="service-card green">
              <div className="icon">🖥️</div>
              <div className="text">
                <h3>Website Design</h3>
                <p>76 Projects</p>
              </div>
            </div>
            <div className="service-card yellow">
              <div className="icon">📱</div>
              <div className="text">
                <h3>Mobile App Design</h3>
                <p>63 Projects</p>
              </div>
            </div>
            <div className="service-card red">
              <div className="icon">🎨</div>
              <div className="text">
                <h3>Brand Identity</h3>
                <p>47 Projects</p>
              </div>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>285+</strong>
              <br />
              Project Completed
            </div>
            <div>
              <strong>190+</strong>
              <br />
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
