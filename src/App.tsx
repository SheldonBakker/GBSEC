// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Gbmed from './components/Gbmed';
import Academy from './components/Academy';
import Psira from './components/Psira';
import Specialops from './components/Special';
import Range from './components/Range';
import RifleScopesAndAccessories from './components/Accessories';
import AmmunitionPage from './components/Ammunition';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gbmed" element={<Gbmed />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/psira-grades" element={<Psira />} />
          <Route path="/special-op" element={<Specialops />} />
          <Route path="/gunshop/accessories" element={<RifleScopesAndAccessories />} />
          <Route path="/gunshop/shooting-range" element={<Range />} />
          <Route path="/gunshop/ammunition" element={<AmmunitionPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;