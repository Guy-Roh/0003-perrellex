import React , {useState, useEffect} from 'react';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

import './App.scss';
import ServicesSection from './components/ServicesSection';

const App =()=> {
  return (
    <div>
      <Hero />
      <main>
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

