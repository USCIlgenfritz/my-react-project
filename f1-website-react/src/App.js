// src/App.js

import React from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './pages/HomePage';
import RaceList from './pages/RaceList';
import RaceSchedule from './pages/RaceSchedule';
import News from './pages/News';
import WhatIsF1Page from './pages/WhatIsF1Page';
import Standings from './pages/Standings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <RaceList />
      <RaceSchedule />
      <News />
      <WhatIsF1Page />
      <Standings />
    </div>
  );
}

export default App;
