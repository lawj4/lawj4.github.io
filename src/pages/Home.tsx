import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Jefferson Law</h1>
          <h2 className="hero-subtitle">Computer Science Undergraduate at UCI</h2>
          
          <div className="button-container">
            <button className="cta-button primary">Learn More</button>
            <button className="cta-button secondary">Get In Touch</button>
          </div>
          
          <p className="hero-tagline">Building tomorrow's technology today</p>
        </div>
        
        <div className="floating-elements">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-content">
          <h2 className="section-title">Innovation Meets Excellence</h2>
          <p className="section-description">
            Crafting digital experiences with precision, creativity, and cutting-edge technology
          </p>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance</h3>
              <p>Lightning-fast solutions built for scale</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision</h3>
              <p>Pixel-perfect designs with attention to detail</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Pushing boundaries with modern technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;