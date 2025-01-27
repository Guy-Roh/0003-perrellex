import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

import "./App.scss";

const App = () => {
    return (
        <Router>
            <div>
                <Hero />
                <main>
                    <Routes>
                        <Route path="/" element={<PortfolioSection />} />
                        <Route path="/:slug" element={<PortfolioSection />} /> {/* Route with slug */}
                    </Routes>
                    <AboutSection />
                    <ContactSection />
                </main>
            </div>
        </Router>
    );
};

export default App;
