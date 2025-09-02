import React from 'react';
import { Link } from 'react-router-dom';
import './LandingNavbar.css';

const LandingNavbar = () => {
  return (
    <nav className="landing-navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/src/assets/logo.png" alt="Ollinati Catering" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/packages" className="nav-link">Packages</Link>
        </div>
        <Link to="/login" className="nav-link login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
