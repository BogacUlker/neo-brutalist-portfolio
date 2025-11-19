import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
