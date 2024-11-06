// src/components/RaceSchedule.js
import React from 'react';
import scheduleData from '../data/schedule.json'; // Assuming you added your JSON here

const RaceSchedule = () => {
  return (
    <div>
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
          {scheduleData.races.map((race, index) => (
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

export default RaceSchedule;
