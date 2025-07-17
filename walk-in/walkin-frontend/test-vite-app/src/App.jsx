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
            <Route path="/" element={<Navigate to="/walkin-booking" replace />} />
            <Route path="/walkin-booking" element={<WalkInBooking />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 