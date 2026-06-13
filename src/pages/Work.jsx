import React from 'react';

export default function Work() {
  return (
    <div className="inner-content-layout">
      {/* Page Header */}
      <div className="page-header">
        <h2>Featured Showcase</h2>
        <p>Explore production files across web development, graphic assets, and dynamic motion editing tracks.</p>
      </div>
      
      {/* Combined Unified Project Grid */}
      <div className="content-grid">
        
        {/* Project 1: Web Apps */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-laptop-code"></i> Web Applications</h3>
          <p>Responsive multi-page frameworks and learning management concepts built with optimized rendering architectures and intuitive administrative control panels.</p>
        </div>

        {/* Project 2: Video Editing */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-clapperboard"></i> Video Editing & FX</h3>
          <p>High-energy social media clips, professional transitions, gaming content optimization templates, and advanced speed-ramping projects utilizing premium plugin integrations.</p>
        </div>

        {/* Project 3: Branding & Graphics */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-palette"></i> Branding & Graphics</h3>
          <p>Vector asset packages, corporate profile styling files, custom business sticker distributions, and cohesive landing page component user interfaces.</p>
        </div>

        
        {/* Project 5: Identity Design */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-id-card"></i> Identity Layout Modules</h3>
          <p>Complete execution systems supporting corporate registrations, brand layouts, and functional asset files.</p>
        </div>

      </div>
    </div>
  );
}