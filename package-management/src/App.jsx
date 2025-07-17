import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { FaBell } from 'react-icons/fa';
import searchIcon from './assets/Search.png';
import editIcon from './assets/Edit.png';
import { Routes, Route } from 'react-router-dom';

function PackagesPage() {
  return (
        <div className="menu-box">
          <div className="header-bar">
            <div></div>
            <div className="header-user">
              <span className="header-username">Jen Tarriela</span>
              <FaBell color="#222" />
            </div>
          </div>
          <div className="menu-section-header">
        <span className="menu-title" style={{ fontSize: '2rem' }}>Packages</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div className="menu-search-wrapper">
          <input
            type="text"
            placeholder="Search"
            className="menu-search-input"
          />
          <img src={searchIcon} alt="search" className="menu-search-icon" />
        </div>
        <div className="menu-buttons">
          <button className="edit-btn">
            <img src={editIcon} alt="edit" className="edit-icon" /> Edit
          </button>
          <button className="add-menu-btn">+ Add New Package</button>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '10px 0 8px 0' }}>Event Packages</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        <div className="small-text-card" style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Platinum Debut/ Birthday Package</h3>
          <div className="package-card-content">
            <div className="package-prices">
              <b>Prices:</b><br />
              100pax – <span style={{ color: 'red' }}>Php 84,000</span><br />
              150pax – <span style={{ color: 'red' }}>Php 102,000</span><br />
              200pax – <span style={{ color: 'red' }}>Php 120,000</span><br />
              250pax – <span style={{ color: 'red' }}>Php 138,000</span>
            </div>
            <div className="package-inclusions">
              <b>Inclusions:</b>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Choice of Main Menu with Rice, Desserts and Softdrinks</li>
                <li>Air conditioned room for 8hrs.</li>
                <li>3 layered decorative birthday cake</li>
                <li>Complete lights & sound system</li>
                <li>Photobooth for 2hrs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="small-text-card" style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Gold Wedding Package</h3>
          <div className="package-card-content">
            <div className="package-prices">
              <b>Prices:</b><br />
              100pax – <span style={{ color: 'red' }}>Php 81,600</span><br />
              150pax – <span style={{ color: 'red' }}>Php 99,600</span><br />
              200pax – <span style={{ color: 'red' }}>Php 117,600</span><br />
              250pax – <span style={{ color: 'red' }}>Php 135,600</span><br />
              300pax – <span style={{ color: 'red' }}>Php 153,600</span>
            </div>
            <div className="package-inclusions">
              <b>Inclusions:</b>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Choice of Main Menu with Desserts and Softdrinks</li>
                <li>Flower arrangement for entourage and venue</li>
                <li>3 layered decorative wedding cake</li>
                <li>Basic light and sound system</li>
                <li>Photobooth for 2hrs & 3 x 4 tarpaulin</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Theme set up Package</h3>
          <div className="package-card-content">
            <div className="package-prices">
              <b>Prices:</b><br />
              50pax – <span style={{ color: 'red' }}>Php 28,000</span><br />
              60pax – <span style={{ color: 'red' }}>Php 31,600</span><br />
              70pax – <span style={{ color: 'red' }}>Php 35,200</span><br />
              80pax – <span style={{ color: 'red' }}>Php 38,800</span><br />
              100pax – <span style={{ color: 'red' }}>Php 46,000</span><br />
              120pax – <span style={{ color: 'red' }}>Php 54,000</span><br />
              150pax – <span style={{ color: 'red' }}>Php 54,000</span><br />
              200pax – <span style={{ color: 'red' }}>Php 82,000</span>
            </div>
            <div className="package-inclusions">
              <b>Inclusions:</b>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Choice of Main Menu with Desserts and Softdrinks</li>
                <li>Uniformed standard waiters</li>
                <li>Elegant Buffet set-up with Tiffany chairs</li>
                <li>Four hours use of Ron Pavilion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '10px 0 8px 0' }}>Event Themes</h2>
      <div style={{ display: 'flex', gap: 14, marginBottom: 12 }}>
        <div style={{ background: '#fff176', border: '2px solid #ffe066', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '96%', height: '70%', background: '#fff', borderRadius: 8, marginBottom: 12 }}></div>
          <div style={{ fontWeight: 500, fontSize: '1.1rem', textAlign: 'center', fontFamily: 'Lora, Georgia, Times, serif' }}>
            Slam Dunk Theme
          </div>
        </div>
        <div style={{ background: '#fff176', border: '2px solid #ffe066', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '96%', height: '70%', background: '#fff', borderRadius: 8, marginBottom: 12 }}></div>
          <div style={{ fontWeight: 500, fontSize: '1.1rem', textAlign: 'center', fontFamily: 'Lora, Georgia, Times, serif' }}>
            Classic Elegance
          </div>
        </div>
        <div style={{ background: '#fff176', border: '2px solid #ffe066', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '96%', height: '70%', background: '#fff', borderRadius: 8, marginBottom: 12 }}></div>
          <div style={{ fontWeight: 500, fontSize: '1.1rem', textAlign: 'center', fontFamily: 'Lora, Georgia, Times, serif' }}>
            Deadpool Theme
          </div>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '10px 0 8px 0' }}>Event Add-Ons</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        <div className="addon-card" style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Tisoy’s Ice Cream</h3>
          <div style={{ margin: '10px 0' }}>
            <b>Prices:</b><br />
            3 Gallons (1 Flavor, 100 cups) – <span style={{ color: 'red' }}>Php 3,000</span><br />
            4 Gallons (2 Flavors, 135 cups) – <span style={{ color: 'red' }}>Php 3,500</span>
          </div>
        </div>
        <div className="addon-card" style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Tisoy’s Ice Cream</h3>
          <div style={{ margin: '10px 0' }}>
            <b>Prices:</b><br />
            3 Gallons (1 Flavor, 100 cups) – <span style={{ color: 'red' }}>Php 3,000</span><br />
            4 Gallons (2 Flavors, 135 cups) – <span style={{ color: 'red' }}>Php 3,500</span>
          </div>
        </div>
        <div className="addon-card" style={{ background: '#fff', border: '2px solid #fff176', borderRadius: 10, padding: 14, width: 370, height: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Tisoy’s Ice Cream</h3>
          <div style={{ margin: '10px 0' }}>
            <b>Prices:</b><br />
            3 Gallons (1 Flavor, 100 cups) – <span style={{ color: 'red' }}>Php 3,000</span><br />
            4 Gallons (2 Flavors, 135 cups) – <span style={{ color: 'red' }}>Php 3,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function MenuPage() {
  return <div className="menu-box"><h2>Menu Page</h2></div>;
}
function VenueSetupsPage() {
  return <div className="menu-box"><h2>Venue Setups Page</h2></div>;
}
function InventoryPage() {
  return <div className="menu-box"><h2>Inventory Page</h2></div>;
}
function StaffManagementPage() {
  return <div className="menu-box"><h2>Staff Management Page</h2></div>;
}

export default function App() {
  return (
    <div className="app-flex-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PackagesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/venue-setups" element={<VenueSetupsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/staff-management" element={<StaffManagementPage />} />
        </Routes>
      </main>
    </div>
  );
}
