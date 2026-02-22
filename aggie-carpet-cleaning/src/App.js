import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarpetCleaning from './pages/Services/CarpetCleaning';
import FurnitureRugs from './pages/Services/FurnitureRugs';
import TileGrout from './pages/Services/TileGrout';
import AreasWeServe from './pages/Info/AreasWeServe';
import Reviews from './pages/Info/Reviews';
import FAQ from './pages/Info/FAQ';
import Blog from './pages/Info/Blog';
import Contact from './pages/Contact';
import CarpetCleanersLasCruces from './pages/Blog/CarpetCleanersLasCruces';
import TileGroutElPaso from './pages/Blog/TileGroutElPaso';
import UpholsteryCleaningMesilla from './pages/Blog/UpholsteryCleaningMesilla';
import CarpetCleanersSunlandPark from './pages/Blog/CarpetCleanersSunlandPark';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/services/furniture-rugs" element={<FurnitureRugs />} />
        <Route path="/services/tile-grout" element={<TileGrout />} />
        <Route path="/info/areas-we-serve" element={<AreasWeServe />} />
        <Route path="/info/reviews" element={<Reviews />} />
        <Route path="/info/faq" element={<FAQ />} />
        <Route path="/info/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/how-to-choose-carpet-cleaners-las-cruces" element={<CarpetCleanersLasCruces />} />
        <Route path="/blog/el-paso-guide-tile-grout-cleaning" element={<TileGroutElPaso />} />
        <Route path="/blog/finding-quality-upholstery-cleaning-mesilla" element={<UpholsteryCleaningMesilla />} />
        <Route path="/blog/carpet-cleaners-sunland-park" element={<CarpetCleanersSunlandPark />} />
      </Routes>
    </Router>
  );
}

export default App;