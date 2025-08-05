import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import "../App.css";

function Edit2DSetup() {
  const navigate = useNavigate();
  const [selectedLayout, setSelectedLayout] = useState('Birthday (200 pax)');

  return (
    <div className="app">
      {/* Empty White Sidebar with Logo */}
      <aside style={{
        width: '250px',
        backgroundColor: 'white',
        borderRight: '1px solid #e0e0e0',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
        justifyContent: 'flex-start'
      }}>
        {/* Logo at the top */}
        <img 
          src={logo} 
          alt="Ollinati Catering Logo" 
          style={{
            width: '220px',
            margin: '0 auto',
            display: 'block',
            marginBottom: '40px'
          }}
        />
        
        {/* Predefined Layouts Section - positioned higher */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          padding: '0 15px',
          marginTop: 'auto',
          marginBottom: '60px'
        }}>
          <h3 style={{ 
            marginBottom: '5px', 
            fontSize: '14px', 
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Use Predefined Layouts
          </h3>
          <select 
            value={selectedLayout}
            onChange={(e) => setSelectedLayout(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              marginBottom: '10px'
            }}
          >
            <option value="Birthday (200 pax)">Birthday (200 pax)</option>
            <option value="Wedding (150 pax)">Wedding (150 pax)</option>
            <option value="Corporate (100 pax)">Corporate (100 pax)</option>
            <option value="Anniversary (80 pax)">Anniversary (80 pax)</option>
          </select>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '8px',
            width: '100%'
          }}>
            <button 
              onClick={() => navigate('/')}
              style={{
                flex: 1,
                padding: '8px',
                backgroundColor: '#000',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Back
            </button>
            <button 
              style={{
                flex: 1,
                padding: '8px',
                backgroundColor: '#fff176',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Save
            </button>
          </div>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="main-content" style={{width: '100%'}}>
        <div className="menu-box">
          <div className="header-bar">
            <div></div>
            <div className="header-user">
              <span className="header-username">Jen Tarriela</span>
              <FaBell color="#222" />
            </div>
          </div>
          {/* Completely empty main content area */}
        </div>
      </main>
    </div>
  );
}

export default Edit2DSetup; 