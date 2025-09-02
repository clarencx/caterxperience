import React, { useState } from 'react';
import '../Menu.css';

function Menu() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Beef', items: ['', '', '', '', ''] },
    { name: 'Pork', items: ['', '', '', '', ''] },
    { name: 'Chicken', items: ['', '', '', '', ''] },
    { name: 'Vegetables', items: ['', '', '', '', ''] },
    { name: 'Pasta or Fish', items: ['', '', '', '', ''] },
    { name: 'Dessert', items: ['', '', '', '', ''] },
  ];

  const filtered = categories.map(cat => ({
    ...cat,
    items: cat.items.filter(it => (it || '').toLowerCase().includes(searchTerm.toLowerCase()))
  }));
    // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="page-container menu-white">
      <div className="main-content">

        <section className="page-header">
          <div className="page-header-actions" style={{ justifyContent: 'space-between', padding: '0 24px' }}>
            <div className="menu-main-title">Menu</div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search food by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="page-bottom">
          <div className="menu-categories">
            {filtered.map(cat => (
              <div key={cat.category} className="menu-category-block">
                <h3 className="category-title">{cat.name}</h3>
                <div className="menu-grid">
                  {cat.items.map((item, idx) => (
                    <div key={`${cat.name}-${idx}`} className="menu-card">
                      <div className="menu-card-content">
                        <span className="menu-name">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="no-results">No foods found.</p>
            )}
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Menu;


