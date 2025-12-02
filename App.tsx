import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReelSection from './components/ReelSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [heroKey, setHeroKey] = useState(0);
  
  const conceptArtProjects = useMemo(() => 
    PROJECTS.filter(p => p.category === 'Concept Art'), 
  []);

  const modelingProjects = useMemo(() => 
    PROJECTS.filter(p => p.category === '3D Modeling'), 
  []);

  const handleHomeClick = () => {
    // Reset key to re-trigger animation in Hero
    setHeroKey(prev => prev + 1);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/20">
      <Navbar onHomeClick={handleHomeClick} />
      
      <main>
        <Hero key={heroKey} />
        
        <ReelSection />

        <PortfolioSection 
          id="concept-art" 
          title="Concept Art" 
          subtitle="Character design, environmental sketches, and stylistic explorations."
          projects={conceptArtProjects}
        />
        
        <PortfolioSection 
          id="3d-modeling" 
          title="3D Modeling" 
          subtitle="High-fidelity characters, props, and architectural studies."
          projects={modelingProjects}
          bgColor="bg-[#18181b]" // slightly lighter dark for contrast
        />
        
        <ContactSection />
      </main>
    </div>
  );
};

export default App;