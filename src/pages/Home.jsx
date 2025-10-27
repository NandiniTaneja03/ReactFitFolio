import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroContainer: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroText: {
      fontSize: '1.3rem',
      marginBottom: '40px',
      lineHeight: '1.6',
      opacity: '0.9'
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    ctaButton: {
      padding: '15px 30px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '50px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    primaryButton: {
      backgroundColor: '#ff6b6b',
      color: 'white',
      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    featuresPreview: {
      padding: '80px 20px',
      backgroundColor: '#f8f9fa'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },
    featuresTitle: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '60px',
      fontWeight: '600'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '40px'
    },
    featureCard: {
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #e9ecef'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '20px'
    },
    featureCardTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '15px',
      fontWeight: '600'
    },
    featureCardText: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: '1rem'
    }
  };

  // Add hover effects
  const featureCardHover = {
    ...styles.featureCard,
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
  };

  const primaryButtonHover = {
    ...styles.ctaButton,
    ...styles.primaryButton,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 107, 107, 0.6)'
  };

  const secondaryButtonHover = {
    ...styles.ctaButton,
    ...styles.secondaryButton,
    transform: 'translateY(-2px)',
    backgroundColor: 'rgba(255,255,255,0.1)'
  };

  return (
    <>
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>AI-Powered Resume Tools</h1>
          <p style={styles.heroText}>
            Get instant feedback on your resume or build a professional one from scratch with our advanced AI technology.
          </p>
          <div style={styles.heroButtons}>
            <Link 
              to="/grader" 
              style={{...styles.ctaButton, ...styles.primaryButton}}
              onMouseEnter={(e) => {
                e.target.style.transform = primaryButtonHover.transform;
                e.target.style.boxShadow = primaryButtonHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = styles.primaryButton.boxShadow;
              }}
            >
              Grade My Resume
            </Link>
            <Link 
              to="/builder" 
              style={{...styles.ctaButton, ...styles.secondaryButton}}
              onMouseEnter={(e) => {
                e.target.style.transform = secondaryButtonHover.transform;
                e.target.style.backgroundColor = secondaryButtonHover.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = styles.secondaryButton.backgroundColor;
              }}
            >
              Build New Resume
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.featuresPreview}>
        <div style={styles.container}>
          <h2 style={styles.featuresTitle}>Why Choose ResumeAI?</h2>
          <div style={styles.featuresGrid}>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = featureCardHover.transform;
                e.currentTarget.style.boxShadow = featureCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.featureCard.boxShadow;
              }}
            >
              <div style={styles.featureIcon}>🤖</div>
              <h3 style={styles.featureCardTitle}>AI-Powered Analysis</h3>
              <p style={styles.featureCardText}>
                Get detailed feedback on your resume content, formatting, and keywords
              </p>
            </div>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = featureCardHover.transform;
                e.currentTarget.style.boxShadow = featureCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.featureCard.boxShadow;
              }}
            >
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureCardTitle}>Instant Results</h3>
              <p style={styles.featureCardText}>
                Receive comprehensive analysis and suggestions in seconds
              </p>
            </div>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = featureCardHover.transform;
                e.currentTarget.style.boxShadow = featureCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.featureCard.boxShadow;
              }}
            >
              <div style={styles.featureIcon}>🎯</div>
              <h3 style={styles.featureCardTitle}>ATS Optimized</h3>
              <p style={styles.featureCardText}>
                Ensure your resume passes through Applicant Tracking Systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;