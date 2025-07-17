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
      <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
        <Sidebar />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%'
        }}>
          <div style={{
            width: '100%',
            padding: '0 8px'
          }}>
            <Header />
          </div>
          <main style={{
            flex: 1,
            width: '100%',
            background: '#ededed',
            padding: '32px 8px 24px 8px',
            minHeight: '100vh',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <Routes>
              <Route path="/" element={<Inventory />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
