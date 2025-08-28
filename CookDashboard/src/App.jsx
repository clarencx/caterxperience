import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import { FaBell } from 'react-icons/fa'

function DashboardContent() {
  return (
    <>
      <div className="date-row">August 28, 2025</div>
      <div className="menu-box">
        <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>Welcome, Kiana!</div>
        <div className="stats-grid">
          <div className="kpi-card"><div className="kpi-left"><span className="label">Assigned Events</span><span className="num">2</span></div><img className="kpi-icon" src="/src/assets/kpi/filter.svg" /></div>
          <div className="kpi-card"><div className="kpi-left"><span className="label">Menu to Prepare</span><span className="num">2</span></div><img className="kpi-icon" src="/src/assets/kpi/menu.svg" /></div>
          <div className="kpi-card"><div className="kpi-left"><span className="label">Total Menus Completed</span><span className="num">23</span></div><img className="kpi-icon" src="/src/assets/kpi/complete.svg" /></div>
          <div className="kpi-card"><div className="kpi-left"><span className="label">Total Pending Menus</span><span className="num">5</span></div><img className="kpi-icon" src="/src/assets/kpi/pending.svg" /></div>
        </div>
        <div style={{ fontFamily: 'Lora, Georgia, Times, serif', fontWeight: 700, marginBottom: 8 }}>Assigned Events</div>
        <div className="content-grid">
          <div>
            <div className="table-card">
              <table className="table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th>Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Anniversary</td>
                    <td>April 19<br/>9:00AM-2:00PM</td>
                    <td>Ron Pavilion- Banquet Room</td>
                  </tr>
                  <tr>
                    <td>Anniversary</td>
                    <td>April 19<br/>4:00AM-8:00PM</td>
                    <td>Ron Pavilion- Banquet Room</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="right-panel">
              <div className="right-title">To Prepare Today</div>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Chicken Pastil</li>
                <div style={{ fontSize: 12, marginLeft: 16 }}>8:00AM</div>
                <hr className="right-line" />
                <li>Fetuccine Alfredo</li>
                <div style={{ fontSize: 12, marginLeft: 16 }}>12:00PM</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function EventBookingsContent() {
  return (
    <div className="menu-box bookings">
      <div className="header-row">
        <div style={{ fontFamily: 'Lora, Georgia, Times, serif', fontWeight: 700, fontSize: '1.4rem' }}>Bookings</div>
        <div className="actions">
          <div className="filter"><img src="/icons/filter.svg" width="22" height="22" /></div>
          <div className="search">
            <img src="/icons/search.svg" width="18" height="18" />
            <input placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="table-card">
        <table className="table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Client Name</th>
              <th>Date/Time</th>
              <th>Venue</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lance’s 50th Birthday</td>
              <td>Lance Cedric Bulan</td>
              <td>May 1, 2025<br/>11:00am - 3:00pm</td>
              <td>Pavilion</td>
              <td><span style={{ background: '#ffeeba', padding: '4px 10px', borderRadius: 12, fontWeight: 700 }}>Pending</span></td>
              <td><button className="more-btn" aria-label="More options"><svg width="18" height="6" viewBox="0 0 18 6" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="#ffffff"/><circle cx="9" cy="3" r="3" fill="#ffffff"/><circle cx="15" cy="3" r="3" fill="#ffffff"/></svg></button></td>
            </tr>
            <tr>
              <td>Kate’s Debut</td>
              <td>Kate Liang</td>
              <td>April 13, 2025<br/>4:00am - 8:00pm</td>
              <td>Pavilion</td>
              <td><span style={{ background: '#c9f7d5', padding: '4px 10px', borderRadius: 12, fontWeight: 700 }}>Done</span></td>
              <td><button className="more-btn" aria-label="More options"><svg width="18" height="6" viewBox="0 0 18 6" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="#ffffff"/><circle cx="9" cy="3" r="3" fill="#ffffff"/><circle cx="15" cy="3" r="3" fill="#ffffff"/></svg></button></td>
            </tr>
            <tr>
              <td>Grace & Kurt’s 50th...</td>
              <td>Grace Judith Papruz</td>
              <td>April 20, 2025<br/>4:00am - 8:00pm</td>
              <td>Pavilion</td>
              <td><span style={{ background: '#c9f7d5', padding: '4px 10px', borderRadius: 12, fontWeight: 700 }}>Done</span></td>
              <td><button className="more-btn" aria-label="More options"><svg width="18" height="6" viewBox="0 0 18 6" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="#ffffff"/><circle cx="9" cy="3" r="3" fill="#ffffff"/><circle cx="15" cy="3" r="3" fill="#ffffff"/></svg></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function MenuContent() {
  const categories = [
    { name: 'Beef', items: ['', '', '', '', ''] },
    { name: 'Pork', items: ['', '', '', '', ''] },
    { name: 'Chicken', items: ['', '', '', '', ''] },
    { name: 'Vegetables', items: ['', '', '', '', ''] },
    { name: 'Pasta or Fish', items: ['', '', '', '', ''] },
    { name: 'Dessert', items: ['', '', '', '', ''] },
  ]
  return (
    <div className="menu-box menu-page">
      <div className="header-row">
        <div style={{ fontFamily: 'Lora, Georgia, Times, serif', fontWeight: 700, fontSize: '1.4rem' }}>Menu</div>
        <div className="controls">
          <div className="search"><img src="/icons/search.svg" width="18" height="18" /><input placeholder="Search food by name..." /></div>
          <button className="add-btn">+ Add New Menu</button>
        </div>
      </div>
      {categories.map((cat) => (
        <div className="menu-section" key={cat.name}>
          <div className="menu-title">{cat.name}</div>
          <div className="menu-grid">
            {cat.items.map((it, idx) => (
              <div className="menu-card" key={idx}>{it || ''}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  return (
    <div className="app">
      <Sidebar onNavigate={setActivePage} active={activePage} />
      <main className="main-content">
        <div className="header-bar">
          <div className="header-username" style={{ marginRight: 8 }}>Cook Kiana</div>
          <div className="header-user">
            <FaBell color="#222" />
          </div>
        </div>
        {activePage === 'dashboard' ? <DashboardContent /> : activePage === 'bookings' ? <EventBookingsContent /> : <MenuContent />}
      </main>
    </div>
  )
}

