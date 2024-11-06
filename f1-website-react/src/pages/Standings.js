// src/pages/Standings.js

import React from 'react';
import './Standings.css'; // Assuming you have a Standings.css for specific styles.

function Standings() {
  return (
    <div id="main-content">
      <header id="main-header">
        <h1>2024 Formula 1 Standings</h1>
        <p>See the current standings of drivers and teams in the 2024 Formula 1 season.</p>
      </header>

      <table className="standings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {/* Static content for standings */}
          <tr>
            <td>1</td>
            <td>Max Verstappen</td>
            <td>Red Bull Racing</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Charles Leclerc</td>
            <td>Ferrari</td>
            <td>85</td>
          </tr>
          {/* More rows for each driver */}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
