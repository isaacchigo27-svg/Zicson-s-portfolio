import React from 'react';

export default function Skills() {
  return (
    <div className="inner-content-layout">
      {/* Page Header */}
      <div className="page-header">
        <h2>Technical Matrix Capabilities</h2>
        <p>The engineering configurations, post-production workflows, and visual asset systems deployed daily.</p>
      </div>
      
      <div className="content-grid">
        
        {/* Card 1: Web Engineering */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-code"></i> Code & UI Engineering</h3>
          <p>Advanced implementations utilizing highly responsive components, semantic structures, clean asynchronous navigation routing, state logic, and optimized UI architectures.</p>
        </div>

        {/* Card 2: Video Editing */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-clapperboard"></i> Video Editing & FX</h3>
          <p>Cinematic timeline editing, dynamic motion graphics tracking, frame interpolation, precise velocity speed-ramping, audio synchronization, and high-fidelity rendering pipeline configurations.</p>
        </div>

        {/* Card 3: Graphics & Corporate Infrastructure */}
        <div className="interactive-box">
          <h3><i className="fa-solid fa-palette"></i> Creative Identity & Design</h3>
          <p>Premium vector asset generation, typography scale structures, custom business stickers, corporate layout blueprints, and cohesive visual branding systems for modern platforms.</p>
        </div>

      </div>
    </div>
  );
}