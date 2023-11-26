import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

import './App.scss';

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

