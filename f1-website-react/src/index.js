// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Ensure the path is correct
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: For performance measuring
reportWebVitals();
