
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Culture } from './components/Culture';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Culture />
        <Projects />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
