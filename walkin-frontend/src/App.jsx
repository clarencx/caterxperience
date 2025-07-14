 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WalkInBooking from './components/WalkInBooking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/bookings" replace />} />
            <Route path="/walkin-booking" element={<Navigate to="/admin/bookings" replace />} />
            <Route path="/admin/bookings" element={<WalkInBooking />} />
            {/* Add placeholder routes for all sidebar links for now */}
            <Route path="/admin/dashboard" element={<div>Dashboard Page (Coming Soon)</div>} />
            <Route path="/admin/clients" element={<div>Clients Page (Coming Soon)</div>} />
            <Route path="/admin/payment" element={<div>Payment Records Page (Coming Soon)</div>} />
            <Route path="/admin/menu" element={<div>Menu Page (Coming Soon)</div>} />
            <Route path="/admin/package" element={<div>Packages Page (Coming Soon)</div>} />
            <Route path="/admin/setup" element={<div>Venue Setups Page (Coming Soon)</div>} />
            <Route path="/admin/inventory" element={<div>Inventory Page (Coming Soon)</div>} />
            <Route path="/admin/users" element={<div>Staff Management Page (Coming Soon)</div>} />
            <Route path="/admin/audit" element={<div>Audit Log Page (Coming Soon)</div>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 