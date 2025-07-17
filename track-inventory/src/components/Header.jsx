import React from 'react';
import { FaBell } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  return (
    <div className="header-bar">
      <div></div>
      <div className="header-user">
        <span className="header-username">Jen Tarriela</span>
        <FaBell color="#222" />
      </div>
    </div>
  );
} 