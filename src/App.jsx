import React, { useState, useEffect } from 'react';
import './App.css';
import KeyFiguresSection from './components/KeyFiguresSection';
import AboutMCSection from './components/AboutMCSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTriggerSection from './components/ScrollTriggerSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [enableFullpage, setEnableFullpage] = useState(false);

  useEffect(() => {
    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='bg-blue-900'>
      <Navbar />
      
      {/* Option 1: Pure ScrollTrigger approach */}
      <ScrollTriggerSection 
        className="min-h-screen"
        triggerOptions={{
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }}
      >
        <KeyFiguresSection onFinish={() => setEnableFullpage(true)} />
      </ScrollTriggerSection>

      <ScrollTriggerSection 
        className="min-h-screen"
        triggerOptions={{
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }}
      >
        <AboutMCSection />
      </ScrollTriggerSection>

      <Footer />
    </div>
  );
}