import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingNavbar.css';

const LandingNavbar = () => {
  return (
    <nav className="landing-navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/src/assets/logo.png" alt="Ollinati Catering" />
        </div>
        <div className="nav-links">
          <NavLink to="/" end className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          <NavLink to="/menu" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Menu</NavLink>
          <NavLink to="/packages" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Packages</NavLink>
        </div>
        <NavLink to="/login" className="nav-link login-btn">Login</NavLink>
      </div>
    </nav>
  );
};

export default LandingNavbar;
