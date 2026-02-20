import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarpetCleaning from './pages/Services/CarpetCleaning';
import FurnitureRugs from './pages/Services/FurnitureRugs';
import TileGrout from './pages/Services/TileGrout';
import WaterDamage from './pages/Services/WaterDamage';
import MoldRemediation from './pages/Services/MoldRemediation';
import AreasWeServe from './pages/Info/AreasWeServe';
import Reviews from './pages/Info/Reviews';
import FAQ from './pages/Info/FAQ';
import Blog from './pages/Info/Blog';
import Contact from './pages/Contact';
import CarpetCleanersLasCruces from './pages/Blog/CarpetCleanersLasCruces';
import TileGroutDeming from './pages/Blog/TileGroutDeming';
import UpholsteryCleaningMesilla from './pages/Blog/UpholsteryCleaningMesilla';
import WaterDamageHatch from './pages/Blog/WaterDamageHatch';
import CarpetCleanersSunlandPark from './pages/Blog/CarpetCleanersSunlandPark';
import MoldRemediationAnthony from './pages/Blog/MoldRemediationAnthony';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/services/furniture-rugs" element={<FurnitureRugs />} />
        <Route path="/services/tile-grout" element={<TileGrout />} />
        <Route path="/services/water-damage" element={<WaterDamage />} />
        <Route path="/services/mold-remediation" element={<MoldRemediation />} />
        <Route path="/info/areas-we-serve" element={<AreasWeServe />} />
        <Route path="/info/reviews" element={<Reviews />} />
        <Route path="/info/faq" element={<FAQ />} />
        <Route path="/info/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/how-to-choose-carpet-cleaners-las-cruces" element={<CarpetCleanersLasCruces />} />
        <Route path="/blog/deming-guide-tile-grout-cleaning" element={<TileGroutDeming />} />
        <Route path="/blog/finding-quality-upholstery-cleaning-mesilla" element={<UpholsteryCleaningMesilla />} />
        <Route path="/blog/water-damage-restoration-hatch" element={<WaterDamageHatch />} />
        <Route path="/blog/carpet-cleaners-sunland-park" element={<CarpetCleanersSunlandPark />} />
        <Route path="/blog/mold-remediation-anthony" element={<MoldRemediationAnthony />} />
      </Routes>
    </Router>
  );
}

export default App;