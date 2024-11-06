// src/pages/HomePage.js
import React from 'react';
import RaceSchedule from '../components/RaceSchedule';
import './HomePage.css'; // Custom styles for this page

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the F1 Website</h1>
      <RaceSchedule />
    </div>
  );
};

export default HomePage;
