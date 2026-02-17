import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarpetCleaning from './pages/Services/CarpetCleaning';
import FurnitureRugs from './pages/Services/FurnitureRugs';
import TileGrout from './pages/Services/TileGrout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/services/furniture-rugs" element={<FurnitureRugs />} />
        <Route path="/services/tile-grout" element={<TileGrout />} />
      </Routes>
    </Router>
  );
}

export default App;