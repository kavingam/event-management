// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';  // Import the CSS for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
