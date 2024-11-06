// src/pages/News.js

import React from 'react';
import './News.css'; // Assuming you have a News.css for specific styles.

function News() {
  return (
    <div id="main-content">
      <header id="main-header">
        <h1>Latest News</h1>
        <p>Stay updated with the most recent news about Formula 1!</p>
      </header>

      <section className="news-item">
        <h2>Formula 1 2024 Preseason News</h2>
        <p>The new season is about to begin! Here's what you need to know about the teams, drivers, and new regulations for 2024.</p>
        <a href="/news/1" className="news-button">Read More</a>
      </section>

      <section className="news-item">
        <h2>Exciting Tracks Await in 2024</h2>
        <p>This season brings several exciting tracks, from the high-speed straights of Monza to the twists and turns of Monaco.</p>
        <a href="/news/2" className="news-button">Read More</a>
      </section>

      {/* More news items can be added here */}
    </div>
  );
}

export default News;
