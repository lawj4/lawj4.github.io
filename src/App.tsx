import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import './App.css';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Resume', link: '/resume' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <Router>
      <div className="app-container">
        <MenuBar items={menuItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
