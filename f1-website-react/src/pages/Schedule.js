// src/pages/Schedule.js

import React from 'react';
import './Schedule.css'; // Assuming you have a Schedule.css for specific styles.

function Schedule() {
  return (
    <div id="main-content">
      <header id="main-header">
        <h1>2024 Formula 1 Schedule</h1>
        <p>Here is the complete list of races for the 2024 Formula 1 season!</p>
      </header>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Race</th>
            <th>Track</th>
            <th>Date</th>
            <th>Location</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {/* You can loop over scheduleData to dynamically generate rows */}
          <tr>
            <td>Bahrain Grand Prix</td>
            <td>Bahrain International Circuit</td>
            <td>March 2, 2024</td>
            <td>Sakhir, Bahrain</td>
            <td>Max Verstappen</td>
          </tr>
          <tr>
            <td>Saudi Arabian Grand Prix</td>
            <td>Jeddah Corniche Circuit</td>
            <td>March 9, 2024</td>
            <td>Jeddah, Saudi Arabia</td>
            <td>Max Verstappen</td>
          </tr>
          {/* More rows for each race */}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
