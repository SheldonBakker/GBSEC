// src/components/Home.tsx
import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Team from './Team';
import Contact from './ContactInfo';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Team />
      <Contact />
    </div>
  );
};

export default HomePage;
