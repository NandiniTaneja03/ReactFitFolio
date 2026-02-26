import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: '800',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
      lineHeight: '1.1',
    },
    heroHighlight: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroText: {
      fontSize: '1.25rem',
      marginBottom: '48px',
      lineHeight: '1.6',
      color: '#cbd5e1',
      maxWidth: '800px',
      margin: '0 auto',
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '40px',
    },
    ctaButton: {
      padding: '16px 40px',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: 'white',
      boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
    },
    secondaryButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    featuresPreview: {
      padding: '120px 20px',
      backgroundColor: '#f8fafc',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '3rem',
      color: '#1e293b',
      marginBottom: '80px',
      fontWeight: '700',
      textAlign: 'center',
      letterSpacing: '-0.025em',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '-60px auto 60px',
      lineHeight: '1.6',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '40px',
    },
    featureCard: {
      backgroundColor: 'white',
      padding: '48px 32px',
      borderRadius: '20px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid #e2e8f0',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    featureIcon: {
      fontSize: '3.5rem',
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      color: '#0ea5e9',
    },
    featureCardTitle: {
      fontSize: '1.5rem',
      color: '#1e293b',
      margin: '0',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    featureCardText: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      margin: '0',
    },
    statsBar: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      padding: '60px 20px',
      marginTop: '80px',
      borderRadius: '20px',
      color: 'white',
    },
    statsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      textAlign: 'center',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '800',
      margin: '0',
    },
    statLabel: {
      fontSize: '1rem',
      opacity: '0.9',
      margin: '0',
      fontWeight: '500',
    },
  };

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms provide detailed feedback on content, formatting, and keyword optimization'
    },
    {
      icon: '⚡',
      title: 'Real-time Optimization',
      description: 'Instant suggestions and improvements with actionable insights for immediate application'
    },
    {
      icon: '🎯',
      title: 'ATS Compliance',
      description: 'Ensure your resume passes through Applicant Tracking Systems with keyword optimization'
    },
    {
      icon: '📊',
      title: 'Performance Metrics',
      description: 'Detailed scoring and analytics to track improvement and benchmark against industry standards'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and privacy controls to protect your sensitive career information'
    },
    {
      icon: '🔄',
      title: 'Continuous Updates',
      description: 'Regular algorithm improvements based on the latest hiring trends and industry requirements'
    }
  ];

  const stats = [
    { number: '98%', label: 'User Satisfaction' },
    { number: '40%', label: 'Interview Rate Increase' },
    { number: '50K+', label: 'Resumes Analyzed' },
    { number: '24/7', label: 'AI Availability' },
  ];

  return (
    <>
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={{
            marginBottom: '24px',
          }}>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              AI-Powered Platform
            </span>
          </div>
          <h1 style={styles.heroTitle}>
            Transform Your <span style={styles.heroHighlight}>Career</span> with 
            Intelligent Resume Analysis
          </h1>
          <p style={styles.heroText}>
            Leverage cutting-edge AI technology to optimize your resume, 
            increase interview chances, and accelerate your career growth. 
            Professional-grade tools powered by machine learning.
          </p>
          <div style={styles.heroButtons}>
            <Link 
              to="/grader" 
              style={{...styles.ctaButton, ...styles.primaryButton}}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = '0 4px 14px 0 rgba(37, 99, 235, 0.39)';
              }}
            >
              <span>🎯</span> Analyze Resume
            </Link>
            <Link 
              to="/builder" 
              style={{...styles.ctaButton, ...styles.secondaryButton}}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <span>🚀</span> Build Professional Resume
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.featuresPreview}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Enterprise-Grade Features</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive tools designed for professionals who demand excellence
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureCardTitle}>{feature.title}</h3>
                <p style={styles.featureCardText}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.statsBar}>
            <div style={styles.statsContainer}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statItem}>
                  <h3 style={styles.statNumber}>{stat.number}</h3>
                  <p style={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;