import React from 'react';
import './Inventory.css';
import { FaSearch, FaFilter, FaEdit, FaTrash } from 'react-icons/fa';

const inventoryData = [
  { name: 'Tiffany Chairs', category: 'Furniture', price: '500/piece', quantity: 100, total: 1000 },
  { name: 'Tables', category: 'Furniture', price: '100/piece', quantity: 20, total: 1000 },
  { name: 'Spoon', category: 'Utensils', price: '50/piece', quantity: 100, total: 1000 },
];

export default function Inventory() {
  return (
    <div className="inventory-container">
      <div className="inventory-header-row">
        <h2 className="inventory-title">Inventory Tracking</h2>
        <button className="add-item-btn">+ Add New Item</button>
        <FaFilter className="filter-icon" />
      </div>
      <div className="inventory-search-row">
        <FaSearch className="search-icon" />
        <input className="inventory-search" placeholder="Search" />
      </div>
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td className="action-icons">
                  <FaEdit className="edit-icon" />
                  <FaTrash className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 