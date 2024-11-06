// src/pages/About.js

import React from 'react';
import './About.css'; // Assuming you have an About.css for specific styles.

function About() {
  return (
    <div id="main-content">
      <header id="main-header">
        <h1>About Us</h1>
      </header>

      <section className="main-info-section">
        <h2>Who We Are</h2>
        <p>We are a passionate team of F1 enthusiasts dedicated to bringing you the most up-to-date news, race results, and standings for the 2024 Formula 1 season.</p>
      </section>

      <section className="main-info-section">
        <h2>Our Mission</h2>
        <p>We aim to keep you informed with detailed reports, race schedules, and all the behind-the-scenes information about the teams and drivers.</p>
      </section>

      <section className="main-info-section">
        <h2>Our Team</h2>
        <p>Our team consists of seasoned motorsport fans and professionals who work together to bring the best F1 coverage to our audience.</p>
      </section>
    </div>
  );
}

export default About;
