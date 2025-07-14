import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { FaBell } from 'react-icons/fa';
import searchIcon from './assets/Search.png';
import editIcon from './assets/Edit.png';

const initialMenuData = [
  {
    category: 'Beef',
    items: [
      { name: 'Beef Brocolli' },
      { name: 'Beef Lengua' },
      { name: 'Beef Calderata' },
      { name: 'Beef Kare-Kare' },
      { name: 'Beef Teriyaki' },
    ]
  },
  {
    category: 'Pork',
    items: [
      { name: 'Pork Menudo' },
      { name: 'Pork Embutido' },
      { name: 'Shanghai Roll' },
      { name: 'Lechon Kawali' },
      { name: 'Meatballs' },
    ]
  },
  {
    category: 'Chicken',
    items: [
      { name: 'Chicken Afritada' },
      { name: 'Chicken BBQ' },
      { name: 'Fried Chicken' },
      { name: 'Chicken with Pineapple' },
      { name: 'Chicken Teriyaki' },
    ]
  },
  {
    category: 'Vegetables',
    items: [
      { name: 'Chopsuey' },
      { name: 'Pochero' },
      { name: 'Fresh Lumpia' },
      { name: 'Green Peas w/ Quiall Egg' },
      { name: 'Mongolian' },
    ]
  },
  {
    category: 'Pasta or Fish',
    items: [
      { name: 'Spaghetti' },
      { name: 'Palabok' },
      { name: 'Sotanghon Tuyo' },
      { name: 'Carbonara' },
      { name: 'Fish Fillet' },
    ]
  },
  {
    category: 'Dessert',
    items: [
      { name: 'Fruit Salad' },
      { name: 'Buko Salad' },
      { name: 'Coffee Jelly' },
      { name: 'Macaroni Salad' },
      { name: 'Fruit Jelly' },
    ]
  },
];

function App() {
  const [menuData, setMenuData] = React.useState(initialMenuData);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Lora, Georgia, Times, serif', background: '#f4f4f4', width: '100%', overflowX: 'hidden' }}>
      <Sidebar />
      <main className="main-content">
        <div className="menu-box">
          <div className="header-bar">
            <div></div>
            <div className="header-user">
              <span className="header-username">Jen Tarriela</span>
              <FaBell size={18} color="#222" />
            </div>
          </div>
          <div className="menu-section-header">
            <span className="menu-title">Menu</span>
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
              <button className="add-menu-btn">+ Add New Menu</button>
            </div>
          </div>
          {/* Menu grid */}
          <div className="menu-categories">
            {menuData.map(cat => (
              <div key={cat.category} className="menu-category-block">
                <h3 className="category-title">{cat.category}</h3>
                <div className="menu-grid">
                  {cat.items.map(item => (
                    <div key={item.name} className="menu-card">
                      {/* Only show the name in the yellow footer, no upload label/button */}
                      <div className="menu-card-footer">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
