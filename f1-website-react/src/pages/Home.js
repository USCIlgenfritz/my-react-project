// src/pages/Home.js

import React from 'react';
import './Home.css'; // Assuming you have a Home.css for specific styles.

function Home() {
  return (
    <div id="main-content">
      <header id="main-header">
        <h1>Welcome to Our Formula 1 Website!</h1>
        <p>Your go-to place for the latest news, race schedules, and standings.</p>
      </header>

      <section id="WIF1">
        <h2>Formula 1 2024 Season</h2>
        <p>Catch all the exciting moments from the 2024 F1 season, from races to results!</p>
      </section>

      <section id="standings-teaser">
        <h3>Check out the latest standings!</h3>
        <a href="/standings" className="lm-button">View Standings</a>
      </section>

      {/* Add any other sections here as needed */}
    </div>
  );
}

export default Home;
