import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero-grid">
      {/* Left Column: Core Copy & Actions */}
      <div className="hero-main-content">
        <div className="status-badge">
          <span className="pulse-dot"></span> Open for Projects
        </div>
        
        <h1 className="giant-title">
          Isaac <span>Ebuka</span>
        </h1>
        
        <div className="role-subtitles">
          Founder & CEO <span>·</span> Zicson Enterprise
        </div>
        
        <div className="role-subtitles secondary-roles">
          Frontend Dev <span>·</span> UI/UX & 3D Design <span>·</span> Graphic Designer 
        </div>
        
        <p className="hero-description">
          A professional developer and creative designer crafting immersive 3D web experiences, stunning brand visuals, and handling corporate business registration and legal documentation—all under one roof.
        </p>
        
        <div className="action-buttons">
          <a 
            href="https://wa.me/2347041374919" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary"
          >
            <i className="fa-brands fa-whatsapp"></i> Hire Me
          </a>
          <Link to="/work" className="btn btn-secondary">
            <i className="fa-solid fa-folder-open"></i> View Portfolio
          </Link>
          <Link to="/about" className="btn btn-secondary">
            <i className="fa-solid fa-globe"></i> Our Agency
          </Link>
        </div>
      </div>

      {/* Right Column: 3D-Enhanced Metrics & Design Stack */}
      <div className="metrics-perspective-wrapper">
        <div className="metrics-stack standard-3d-tilt">
          
          {/* Card 1: Projects */}
          <div className="metric-card 3d-layer">
            <div className="card-glass-glow"></div>
            <div className="metric-number">20+</div>
            <div className="metric-label">Live Projects</div>
          </div>
          
          {/* Card 2: Graphic & 3D Designs */}
          <div className="metric-card 3d-layer interactive">
            <div className="card-glass-glow"></div>
            <div className="metric-number">80+</div>
            <div className="metric-label">Graphics & 3D Assets</div>
          </div>
          
          {/* Card 3: Experience */}
          <div className="metric-card 3d-layer">
            <div className="card-glass-glow"></div>
            <div className="metric-number">1+</div>
            <div className="metric-label">Years Experience</div>
          </div>

    

        </div>
      </div>
    </div>
  );
}