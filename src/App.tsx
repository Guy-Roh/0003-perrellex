import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';

// Lazy load the other components
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

import './App.scss';

const App = () => {
  return (
    <div>
      <Hero />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
