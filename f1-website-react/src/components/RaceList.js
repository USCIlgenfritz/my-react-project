// src/components/RaceList.js

import React from 'react';

const RaceList = ({ races }) => {
  return (
    <div className="race-list">
      <h2>Upcoming Races</h2>
      <table>
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
          {races.map((race, index) => (
            <tr key={index}>
              <td>{race.race}</td>
              <td>{race.track}</td>
              <td>{race.date}</td>
              <td>{race.location}</td>
              <td>{race.winner || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceList;
