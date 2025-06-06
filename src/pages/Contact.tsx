import React from 'react';
import './Contact.css';

const Contact = () => {
  const directEmailLink = () => {
    window.location.href = 'mailto:lawj4@uci.edu';
  };

  return (
    <div className="contact-container">
      


      <div className="contact-content">
        <div className="contact-card">
          <div className="card-grid">
            <div className="grid-accent"></div>
            <div className="grid-accent" style={{top: '50%'}}></div>
            <div className="grid-accent vertical"></div>
            <div className="grid-accent vertical" style={{left: '50%'}}></div>
          </div>
          
          <div className="contact-icon">📧</div>
          
          <h2 className="contact-heading">INITIATE SECURE TRANSMISSION</h2>
          
          <div className="email-display">
            <span className="email-label">TARGET ADDRESS:</span>
            <span className="email-address">lawj4@uci.edu</span>
          </div>
          
          <p className="contact-description">
            Click below to open your default email client and establish direct communication 
            with command center for mission briefings, project coordination, and operational inquiries.
          </p>
          
          <button onClick={directEmailLink} className="email-btn">
            <div className="btn-inner">
              <span className="btn-text">SEND TRANSMISSION</span>
              <div className="btn-arrow">→</div>
            </div>
            <div className="btn-glow"></div>
          </button>
          
          <div className="protocol-info">
            <div className="protocol-item">
              <span className="protocol-label">RESPONSE TIME:</span>
              <span className="protocol-value">24-48 HOURS</span>
            </div>
            <div className="protocol-item">
              <span className="protocol-label">ENCRYPTION:</span>
              <span className="protocol-value">STANDARD</span>
            </div>
            <div className="protocol-item">
              <span className="protocol-label">PRIORITY:</span>
              <span className="protocol-value">HIGH</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;