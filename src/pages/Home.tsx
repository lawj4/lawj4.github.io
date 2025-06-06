import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="hero-section">
        <div className="geometric-grid">
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal" style={{top: '25%'}}></div>
          <div className="grid-line horizontal" style={{top: '50%'}}></div>
          <div className="grid-line horizontal" style={{top: '75%'}}></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical" style={{left: '25%'}}></div>
          <div className="grid-line vertical" style={{left: '50%'}}></div>
          <div className="grid-line vertical" style={{left: '75%'}}></div>
        </div>
        
        <div className="hero-content">
          <div className="rank-insignia">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
          
          <h1 className="name-title">JEFFERSON LAW</h1>
          <div className="title-divider"></div>
          <h2 className="position-title">COMPUTER SCIENCE UNDERGRADUATE</h2>
          <h3 className="institution">UNIVERSITY OF CALIFORNIA, IRVINE</h3>
          
          <div className="action-buttons">
            <a href="#/portfolio" className="military-btn primary">
              <span className="btn-text">VIEW PORTFOLIO</span>
              <div className="btn-arrow">→</div>
            </a>
            <a href="#/resume" className="military-btn secondary">
              <span className="btn-text">ACCESS RESUME</span>
              <div className="btn-arrow">→</div>
            </a>
          </div>
        </div>
        
        <div className="hexagon-pattern">
          <div className="hexagon hex-1"></div>
          <div className="hexagon hex-2"></div>
          <div className="hexagon hex-3"></div>
          <div className="hexagon hex-4"></div>
          <div className="hexagon hex-5"></div>
        </div>
      </div>

      <div className="mission-section">
        <div className="section-header">
          <div className="section-number">01</div>
          <h2 className="section-title">MISSION STATEMENT</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="mission-content">
          <div className="mission-text">
            <p>Developing innovative software solutions with precision, discipline, and unwavering commitment to excellence. Every line of code serves a strategic purpose in advancing technological capabilities.</p>
          </div>
          
          <div className="capabilities-grid">
            <div className="capability-item">
              <div className="capability-icon">▲</div>
              <h4>FRONTEND DEVELOPMENT</h4>
              <div className="capability-bar">
                <div className="capability-fill" style={{width: '90%'}}></div>
              </div>
            </div>
            
            <div className="capability-item">
              <div className="capability-icon">■</div>
              <h4>BACKEND SYSTEMS</h4>
              <div className="capability-bar">
                <div className="capability-fill" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="capability-item">
              <div className="capability-icon">◆</div>
              <h4>DATABASE DESIGN</h4>
              <div className="capability-bar">
                <div className="capability-fill" style={{width: '80%'}}></div>
              </div>
            </div>
            
            <div className="capability-item">
              <div className="capability-icon">●</div>
              <h4>SYSTEM ARCHITECTURE</h4>
              <div className="capability-bar">
                <div className="capability-fill" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tactical-section">
        <div className="section-header">
          <div className="section-number">02</div>
          <h2 className="section-title">OPERATIONAL OVERVIEW</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="tactical-grid">
          <div className="tactical-card">
            <div className="card-header">
              <div className="status-indicator active"></div>
              <span className="card-designation">ALPHA</span>
            </div>
            <h3>ACTIVE PROJECTS</h3>
            <div className="metric-display">
              <span className="metric-number">12</span>
              <span className="metric-unit">DEPLOYMENTS</span>
            </div>
          </div>
          
          <div className="tactical-card">
            <div className="card-header">
              <div className="status-indicator standby"></div>
              <span className="card-designation">BRAVO</span>
            </div>
            <h3>YEARS EXPERIENCE</h3>
            <div className="metric-display">
              <span className="metric-number">04</span>
              <span className="metric-unit">YEARS</span>
            </div>
          </div>
          
          <div className="tactical-card">
            <div className="card-header">
              <div className="status-indicator ready"></div>
              <span className="card-designation">CHARLIE</span>
            </div>
            <h3>TECHNOLOGIES MASTERED</h3>
            <div className="metric-display">
              <span className="metric-number">15+</span>
              <span className="metric-unit">SYSTEMS</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;