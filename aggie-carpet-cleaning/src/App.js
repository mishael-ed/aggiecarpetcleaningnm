import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Scrolltotop';
import Home from './pages/Home';
import CarpetCleaning from './pages/Services/CarpetCleaning';
import FurnitureRugs from './pages/Services/FurnitureRugs';
import TileGrout from './pages/Services/TileGrout';
import PetUrineRemoval from './pages/Services/PetUrineRemoval';
import CarpetInstallRepair from './pages/Services/CarpetInstallRepair';
import TileInstallRepair from './pages/Services/TileInstallRepair';
import LaminateFlooringInstallation from './pages/Services/LaminateFlooringInstallation';
import VehicleUpholsteryCarpetCleaning from './pages/Services/VehicleUpholsteryCarpetCleaning';
import AreasWeServe from './pages/Info/AreasWeServe';
import Reviews from './pages/Info/Reviews';
import FAQ from './pages/Info/FAQ';
import Blog from './pages/Info/Blog';
import OurFavoritePlaces from './pages/Info/OurFavoritePlaces';
import Contact from './pages/Contact';
import CarpetCleanersLasCruces from './pages/Blog/CarpetCleanersLasCruces';
import TileGroutElPaso from './pages/Blog/TileGroutElPaso';
import UpholsteryCleaningMesilla from './pages/Blog/UpholsteryCleaningMesilla';
import CarpetCleanersSunlandPark from './pages/Blog/CarpetCleanersSunlandPark';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/services/furniture-rugs" element={<FurnitureRugs />} />
        <Route path="/services/tile-grout" element={<TileGrout />} />
        <Route path="/services/pet-urine-removal" element={<PetUrineRemoval />} />
        <Route path="/services/carpet-installation-repair" element={<CarpetInstallRepair />} />
        <Route path="/services/tile-installation-repair" element={<TileInstallRepair />} />
        <Route path="/services/laminate-flooring-installation" element={<LaminateFlooringInstallation />} />
        <Route path="/services/vehicle-upholstery-carpet-cleaning" element={<VehicleUpholsteryCarpetCleaning />} />
        <Route path="/info/areas-we-serve" element={<AreasWeServe />} />
        <Route path="/info/our-favorite-places" element={<OurFavoritePlaces />} />
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
