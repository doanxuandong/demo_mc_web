import React, { useState } from 'react';
import './App.css';
import KeyFiguresSection from './components/KeyFiguresSection';
import AboutMCSection from './components/AboutMCSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

export default function App() {
  const [enableFullpage, setEnableFullpage] = useState(false);

  return (
    <div>
      <Navbar />
      <ReactFullpage
        autoScrolling={enableFullpage}
        fitToSection={enableFullpage}
        scrollingSpeed={900}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <KeyFiguresSection onFinish={() => setEnableFullpage(true)} />
            </div>
            <div className="section">
              <AboutMCSection />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <Footer />
    </div>
  );
}
