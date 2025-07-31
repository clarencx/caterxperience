import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import "./App.css";
import { FaBell, FaFilter } from 'react-icons/fa';
import searchIcon from '../assets/Search.png';

function App() {
  return (
    <>
    <div className="app">
      <Sidebar />
      <main className="main-content" style={{width: '55%'}}>
        <div className="menu-box">
          <div className="header-bar">
            <div></div>
            <div className="header-user">
              <span className="header-username">Jen Tarriela</span>
              <FaBell color="#222" />
            </div>
          </div>
          <div className="menu-section-header">
            <span className="menu-title" style={{ fontSize: '2rem'}}>Venue Designs</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
              <FaFilter style={{ fontSize: '16px', color: '#222' }} />
              <div className="menu-search-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="menu-search-input"
                />
                <img src={searchIcon} alt="search" className="menu-search-icon" />
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 64, width: '100%', marginBottom: 12, margin: '0 auto'}}>
          <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '700px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
            <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '520px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
            <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '590px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
            <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '520px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
            <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '590px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
            <div style={{ background: '#fff', border: '4px solid #fff176', borderRadius: 10, padding: 16, width: '100%', maxWidth: '520px', height: 250, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Client:</b> Daphne Alwyn
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Type:</b> Anniversary Celebration
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Schedule:</b> April 21, 2025 9:00AM-2:00PM
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Design Status:</b> <span style={{ background: '#fff176', padding: '2px 6px', borderRadius: 4, fontSize: '11px' }}>Pending Design</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Event Venue:</b> Ron Pavilion - Banquet Room
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px' }}>
                <b>Theme:</b> Garden Fairy Theme
              </div>
              <div style={{ marginBottom: 8, fontSize: '15px', textAlign: 'center' }}>
                <button style={{ background: '#fff176', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
                  Edit 2D Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
