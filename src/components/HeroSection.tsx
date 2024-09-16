import React from 'react';
import Heroimage from './assets/GBSECHero.jpg';
import CallButton from './CallButton'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Heroimage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Floating Background Circles for Subtle Effect */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full opacity-35 animate-ping blur-3xl z-1"></div>
      <div className="absolute bottom-16 right-16 w-96 h-96 bg-red-700 rounded-full opacity-40 animate-ping blur-3xl z-1"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider mb-6 animate-fadeIn">
          Gordons Bay Security Trust
        </h1>
        <p className="text-2xl md:text-3xl mb-8 tracking-wide font-light opacity-90 animate-fadeInDelay">
          Your Trusted Security Partner
        </p>
        <div className="Call">
      <CallButton />
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
