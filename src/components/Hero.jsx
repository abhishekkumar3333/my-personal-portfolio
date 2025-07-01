import React from 'react';
import img1 from "../../public/abhi.jpeg"
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>Hey There, <br /> I'm Abhishek</h1>
            <p className="email">abhishekatter3@gmail.com</p>
            <p className="experience">3 MONTHS EXPERIENCE</p>
            <p className="desc">I make beautifully simple things, and I love what I do.</p>

          </div>
          <div className="hero-image">
            <img src={img1} alt="Binjan" />
<div className="link-to-connect">
            <button className="social-button facebook"> <a href="https://www.facebook.com/share/1ZHQskxTUE/">Facebook</a></button>
            <button className="social-button instagram"> <a href="https://www.instagram.com/abhishek_atter_0">Instagram</a></button>
            <button className="social-button twitter">Twitter</button>
            <button className="social-button linkedin"><a href="https://www.linkedin.com/in/abhishek-atter-9907bb33b">LinkedIn</a></button>
            <button className="social-button indeed"> <a href="https://profile.indeed.com/p/abhisheka-c387776">Indeed</a></button>

          </div>
          </div>
          

        </div>

      </div>


    </section>
  );
};

export default Hero;
