import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: "PROJECT_001",
      name: "ZOTSWIPE",
      status: "ACTIVE",
      classification: "CONFIDENTIAL",
      technologies: ["SwiftUI", "Firebase", "Google Sign-In", "Apple Sign In", "Push Notifications", "Real-time Database", "Cloud Functions", "iOS"],
      description: "Connects students to buy and sell unused meal swipes at campus dining halls, reducing waste.",
      githubUrl: "", // Replace with actual URL
      liveUrl: "https://apps.apple.com/us/app/zotswipe/id6746112081", // Replace with live demo URL if available
      completionLevel: 95
    },
    {
      id: "PROJECT_002",
      name: "HEARTHSTONE BOT",
      status: "DEVELOPMENT",
      classification: "PUBLIC",
      technologies: ["Python", "OpenCV", "NumPy", "Tesseract", "Computer Vision", "Machine Learning"],
      description: "ML powered CV system to automatically analyze and extract real-time game board information",
      githubUrl: "https://github.com/lawj4/hearthstone-bot", // Replace with actual URL
      liveUrl: undefined,
      completionLevel: 25
    },
    {
      id: "PROJECT_003", 
      name: "FABFLIX",
      status: "COMPLETED",
      classification: "RESTRICTED",
      technologies: ["Java", "Servlets", "AWS", "Kubernetes", "Docker"],
      description: "Full stack website with movie database functionality.",
      githubUrl: undefined, // No GitHub URL - button won't show
      liveUrl: "https://youtu.be/NB2FqORuHns?si=OmQnidGfiD3MTnVu&t=93",
      completionLevel: 100
    },
    {
      id: "PROJECT_004",
      name: "UCI SEARCH",
      status: "COMPLETED",
      classification: "PUBLIC", 
      technologies: ["Python", "BeautifulSoup"],
      description: "Search engine that scrapes UCI directories using tf-idf and creates an inverted index for fast ranked retrieval.",
      githubUrl: undefined, // Empty string - button won't show
      liveUrl: "#", // Replace with app store link
      completionLevel: 100
    },
    
    {
      id: "PROJECT_005",
      name: "XXX",
      status: "ACTIVE",
      classification: "CONFIDENTIAL",
      technologies: ["1","2","3","4"],
      description: "Description.",
      githubUrl: undefined, // Private repo - no public access
      liveUrl: undefined,
      completionLevel: 50
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return '#27ae60';
      case 'COMPLETED': return '#3498db';
      case 'DEVELOPMENT': return '#f39c12';
      case 'PLANNING': return '#95a5a6';
      default: return '#7f8c8d';
    }
  };

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'PUBLIC': return '#27ae60';
      case 'RESTRICTED': return '#f39c12';
      case 'CONFIDENTIAL': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  // Helper function to check if GitHub URL is valid
  const hasValidGithubUrl = (url: string | undefined) => {
    return url && url.trim() !== "" && url !== "#";
  };

  return (
    <div className="portfolio-container">
      
      <div className="portfolio-header">
        <div className="header-grid">
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal" style={{top: '50%'}}></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical" style={{left: '50%'}}></div>
          <div className="grid-line vertical" style={{left: '100%'}}></div>
        </div>
        
        <div className="header-content">
          <div className="designation-badge">
            <span className="designation">PORTFOLIO</span>
            <span className="clearance">CLEARANCE LEVEL: PUBLIC</span>
          </div>
          
          <h1 className="portfolio-title">PROJECT ARCHIVE</h1>
          <div className="title-divider"></div>
          <p className="portfolio-subtitle">CLASSIFIED DEVELOPMENT OPERATIONS</p>
          
          <div className="stats-display">
            <div className="stat-item">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">ACTIVE PROJECTS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projects.filter(p => p.status === 'COMPLETED').length}</span>
              <span className="stat-label">MISSIONS COMPLETED</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</span>
              <span className="stat-label">TECHNOLOGIES DEPLOYED</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <div className="section-number">01</div>
          <h2 className="section-title">OPERATIONAL PROJECTS</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-header">
                <div className="project-id">{project.id}</div>
                <div className="status-badges">
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                  <span 
                    className="classification-badge"
                    style={{ color: getClassificationColor(project.classification) }}
                  >
                    {project.classification}
                  </span>
                </div>
              </div>
              
              <h3 className="project-name">{project.name}</h3>
              
              <div className="progress-section">
                <div className="progress-header">
                  <span>COMPLETION STATUS</span>
                  <span>{project.completionLevel}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${project.completionLevel}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                <div className="tech-header">DEPLOYED TECHNOLOGIES</div>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                {/* Conditionally render VIEW SOURCE button only if valid GitHub URL exists */}
                {hasValidGithubUrl(project.githubUrl) && (
                  <a 
                    href={project.githubUrl} 
                    className="action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW SOURCE</span>
                    <div className="btn-arrow">→</div>
                  </a>
                )}
                
                {/* Conditionally render LIVE DEMO button if URL exists */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    className="action-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <div className="btn-arrow">→</div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="github-section">
        <div className="section-header">
          <div className="section-number">02</div>
          <h2 className="section-title">GITHUB COMMAND CENTER</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="github-stats">
          <div className="github-card">
            <div className="github-header">
              <div className="github-icon">⚡</div>
              <h3>REPOSITORY ACCESS</h3>
            </div>
            <p>Access complete source code archives and development history for all public operations.</p>
            <a 
              href="https://github.com/lawj4" 
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>ACCESS GITHUB</span>
              <div className="btn-arrow">→</div>
            </a>
          </div>
          
          <div className="contribution-display">
            <h4>CONTRIBUTION ACTIVITY</h4>
            <div className="contribution-grid">
              {Array.from({length: 52}, (_, i) => (
                <div 
                  key={i} 
                  className="contribution-week"
                  style={{ opacity: Math.random() * 0.8 + 0.2 }}
                ></div>
              ))}
            </div>
            <p className="contribution-note">Weekly development activity visualization</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;