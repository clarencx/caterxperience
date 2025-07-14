import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';
import { FaCalendarAlt, FaUser, FaMoneyCheckAlt, FaUtensils, FaBox, FaWarehouse, FaUsersCog, FaClipboardList, FaSignOutAlt, FaHome, FaMapMarkedAlt } from 'react-icons/fa';

export default function Sidebar() {
    return (
    <aside className="sidebar">
        <img src={logo} alt="Ollinati Catering Logo" className="logo-sidebar" />
        <nav>
        <ul>
            <li className="section-header">Main</li>
            <li><FaHome /> Dashboard</li>
            <li><FaCalendarAlt /> Event Bookings</li>
            <li><FaUser /> Clients</li>
            <li><FaMoneyCheckAlt /> Payment Records</li>
            <li className="section-header">Management</li>
            <li className="active"><FaUtensils /> Menu</li>
            <li><FaBox /> Packages</li>
            <li><FaMapMarkedAlt /> Venue Setups</li>
            <li><FaWarehouse /> Inventory</li>
            <li><FaUsersCog /> Staff Management</li>
            <li className="section-header">System</li>
            <li><FaClipboardList /> Audit Log</li>
            <li><FaSignOutAlt /> Log Out</li>
        </ul>
        </nav>
    </aside>
    );
} 