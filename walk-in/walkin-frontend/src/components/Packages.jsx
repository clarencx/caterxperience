import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css';

export default function Packages() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem', background: '#f4f4f4', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '2rem' }}>Packages</h1>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Event Packages</h2>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '180px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '180px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '180px', boxShadow: '0 2px 8px #0001' }}></div>
          </div>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Event Themes</h2>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
          </div>
        </section>
        <section>
          <h2>Event Add-Ons</h2>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
            <div style={{ background: '#fff', border: '2px solid #f3e36c', borderRadius: '10px', width: '300px', height: '120px', boxShadow: '0 2px 8px #0001' }}></div>
          </div>
        </section>
      </div>
    </div>
  );
} 