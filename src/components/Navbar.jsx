import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h1 className="logo">Abhishek</h1>
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#works" onClick={() => setIsOpen(false)}>Works</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
          </div>


          <div className="contact">
            <a href="tel:78070-50501" className="phone-button">
              📞 Call: 78070-50501
            </a>
          </div>


          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
