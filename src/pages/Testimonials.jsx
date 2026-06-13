import React from 'react';

export default function Testimonials() {
  return (
    <div className="inner-content-layout">
      <div className="page-header">
        <h2>Client Validations</h2>
        <p>Evaluations logging operational successes across diverse client channels.</p>
      </div>
      <div className="content-grid">
        <div className="interactive-box">
          <p>"Isaac completely streamlined our web interfaces. Zicson Enterprise consistently brings speed and structure to the table."</p>
          <h3 style={{ fontSize: '1.1rem', marginTop: '15px' }}>- Technical Product Director</h3>
        </div>
        <div className="interactive-box">
          <p>"The business registration process combined with modern branding setup removed all launch bottlenecks for us."</p>
          <h3 style={{ fontSize: '1.1rem', marginTop: '15px' }}>- Corporate Operations Lead</h3>
        </div>
      </div>
    </div>
  );
}