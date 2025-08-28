import React from 'react'
import './Sidebar.css'
import logo from '../assets/logo.png'
import { FaHome, FaCalendarAlt, FaUtensils, FaSignOutAlt } from 'react-icons/fa'

export default function Sidebar({ onNavigate, active }) {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Ollinati Catering" className="logo-sidebar" />
      <nav>
        <ul>
          <li className="section-header">Main</li>
          <li className={active === 'dashboard' ? 'active' : ''} onClick={() => onNavigate?.('dashboard')}><FaHome /> Dashboard</li>
          <li className={active === 'bookings' ? 'active' : ''} onClick={() => onNavigate?.('bookings')}><FaCalendarAlt /> Event Bookings</li>
          <li className="section-header">Management</li>
          <li className={active === 'menu' ? 'active' : ''} onClick={() => onNavigate?.('menu')}><FaUtensils /> Menu</li>
          <li className="section-header">System</li>
          <li><FaSignOutAlt /> Log Out</li>
        </ul>
      </nav>
    </aside>
  )
}

