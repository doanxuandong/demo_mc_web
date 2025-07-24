import React from 'react';
import './App.css';
import KeyFiguresSection from './components/KeyFiguresSection';
import AboutMCSection from './components/AboutMCSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

export default function App() {
  return (
    <div>
      <Navbar />
      <ReactFullpage
        scrollingSpeed={900}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <KeyFiguresSection />
            </div>
            <div className="section">
              <AboutMCSection isActive={state && state.activeSection === 1} />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <Footer />
    </div>
  );
}
