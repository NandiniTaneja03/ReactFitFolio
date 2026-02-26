import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: '#0f172a',
      color: '#cbd5e1',
      padding: '80px 20px 40px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '60px',
      marginBottom: '60px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    logo: {
      fontWeight: '800',
      fontSize: '2rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
      letterSpacing: '-0.025em',
      marginBottom: '16px',
    },
    description: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#94a3b8',
      maxWidth: '300px',
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '20px',
      letterSpacing: '-0.025em',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
    contactIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      color: '#2563eb',
    },
    contactText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    contactLabel: {
      fontSize: '0.75rem',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    contactValue: {
      fontSize: '0.95rem',
      color: '#cbd5e1',
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      color: '#cbd5e1',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
    newsletter: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '24px',
      borderRadius: '12px',
      marginTop: '20px',
    },
    newsletterTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '12px',
    },
    newsletterInput: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '0.9rem',
      marginBottom: '12px',
      fontFamily: "'Inter', sans-serif",
    },
    newsletterButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: "'Inter', sans-serif",
    },
    bottomBar: {
      maxWidth: '1200px',
      margin: '0 auto',
      paddingTop: '40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    copyright: {
      fontSize: '0.875rem',
      color: '#94a3b8',
    },
    bottomLinks: {
      display: 'flex',
      gap: '24px',
    },
    bottomLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'color 0.2s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.column}>
          <Link to="/" style={styles.logo}>ResumeAI</Link>
          <p style={styles.description}>
            AI-powered resume optimization platform helping professionals 
            create impactful career documents with intelligent analysis.
          </p>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialIcon} aria-label="Twitter">𝕏</a>
            <a href="#" style={styles.socialIcon} aria-label="LinkedIn">in</a>
            <a href="#" style={styles.socialIcon} aria-label="GitHub">🐙</a>
            <a href="#" style={styles.socialIcon} aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.sectionTitle}>Platform</h4>
          <div style={styles.linkList}>
            <Link to="/builder" style={styles.link}>
              <span>🚀</span> Resume Builder
            </Link>
            <Link to="/grader" style={styles.link}>
              <span>📊</span> Resume Grader
            </Link>
            <Link to="/features" style={styles.link}>
              <span>✨</span> Features
            </Link>
            <Link to="/about" style={styles.link}>
              <span>👥</span> About Us
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div style={styles.column}>
          <h4 style={styles.sectionTitle}>Resources</h4>
          <div style={styles.linkList}>
            <Link to="/blog" style={styles.link}>
              <span>📝</span> Blog & Guides
            </Link>
            <Link to="/templates" style={styles.link}>
              <span>🎨</span> Templates
            </Link>
            <Link to="/faq" style={styles.link}>
              <span>❓</span> FAQ
            </Link>
            <Link to="/support" style={styles.link}>
              <span>💬</span> Support
            </Link>
          </div>
        </div>

        {/* Contact & Newsletter */}
        <div style={styles.column}>
          <h4 style={styles.sectionTitle}>Contact Info</h4>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📍</div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Location</span>
              <span style={styles.contactValue}>FEE Department, Academic Campus</span>
            </div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📧</div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Email</span>
              <span style={styles.contactValue}>support@resumeai.com</span>
            </div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>⏰</div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Response Time</span>
              <span style={styles.contactValue}>Within 24 hours</span>
            </div>
          </div>

          <div style={styles.newsletter}>
            <div style={styles.newsletterTitle}>Stay Updated</div>
            <input
              type="email"
              placeholder="Your email"
              style={styles.newsletterInput}
            />
            <button
              style={styles.newsletterButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2563eb';
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.copyright}>
          © {currentYear} ResumeAI. All rights reserved.
        </div>
        <div style={styles.bottomLinks}>
          <Link to="/privacy" style={styles.bottomLink}>
            Privacy Policy
          </Link>
          <Link to="/terms" style={styles.bottomLink}>
            Terms of Service
          </Link>
          <Link to="/cookies" style={styles.bottomLink}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;