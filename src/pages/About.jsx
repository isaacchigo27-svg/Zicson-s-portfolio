import React from 'react';

export default function About() {
  return (
    <div className="inner-content-layout">
      <div className="page-header">
        <h2>About Me & Agency</h2>
        <p>Discover the engineering values driving Zicson Enterprise daily workflows</p>
      </div>
      <div className="content-grid">
        <div className="interactive-box">
          <h3>Isaac Ebuka Profile</h3>
          <p>I build elegant frontend applications paired with functional server properties, offering full-lifecycle product development pipelines.</p>
        </div>
        <div className="interactive-box">
          <h3>Zicson Enterprise</h3>
          <p>We build streamlined high-capacity corporate frameworks, UI architectures, legal documentation alignment tracks, and performant web products.</p>
        </div>
      </div>
    </div>
  );
}