import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      marginTop: '50px',
      borderTop: '3px solid #3498db'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
          &copy; {currentYear} Resume AI - Build Professional Resumes
        </p>
        <div style={{ marginTop: '15px' }}>
          <a href="/privacy" style={{ color: '#ecf0f1', margin: '0 15px', textDecoration: 'none' }}>
            Privacy
          </a>
          <a href="/terms" style={{ color: '#ecf0f1', margin: '0 15px', textDecoration: 'none' }}>
            Terms
          </a>
          <a href="/contact" style={{ color: '#ecf0f1', margin: '0 15px', textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;