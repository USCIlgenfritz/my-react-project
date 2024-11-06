// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './Header.css'; // Assuming you have a Header.css for styling

function Header() {
  return (
    <header id="main-header">
      <div className="logo">
        <h1>F1 2024</h1>
      </div>
      
      <nav id="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/standings">Standings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
