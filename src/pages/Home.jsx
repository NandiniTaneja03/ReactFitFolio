import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1>AI-Powered Resume Tools</h1>
          <p>Get instant feedback on your resume or build a professional one from scratch with our advanced AI technology.</p>
          <div className="hero-buttons">
            <Link to="/grader" className="cta-button">Grade My Resume</Link>
            <Link to="/builder" className="cta-button secondary">Build New Resume</Link>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <div className="container">
          <h2>Why Choose ResumeAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Analysis</h3>
              <p>Get detailed feedback on your resume content, formatting, and keywords</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Receive comprehensive analysis and suggestions in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>ATS Optimized</h3>
              <p>Ensure your resume passes through Applicant Tracking Systems</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;