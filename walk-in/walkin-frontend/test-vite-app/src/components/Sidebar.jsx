import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Ollinati Catering</div>
      <ul className="sidebar-nav">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">🏠 Dashboard</Link>
        </li>
        <li className={location.pathname === '/walkin-booking' ? 'active' : ''}>
          <Link to="/walkin-booking">📅 Event Bookings</Link>
        </li>
        <li>
          <Link to="/logout">🔓 Log Out</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; 