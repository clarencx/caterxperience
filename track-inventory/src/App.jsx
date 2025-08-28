import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Inventory from './components/Inventory';
import './App.css';
import './components/Sidebar.css';
import './components/Header.css';

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Sidebar />
        <div className="main-area">
          <Header />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Inventory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
