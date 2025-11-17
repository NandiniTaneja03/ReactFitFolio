import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  // Styles
  const styles = {
    navbar: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '0.5rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: "'Poppins', sans-serif",
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#4f7efc',
      textDecoration: 'none',
    },
    navMenu: (active) => ({
      display: 'flex',
      alignItems: 'center',
      flexDirection: window.innerWidth <= 1024 ? 'column' : 'row',
      position: window.innerWidth <= 1024 ? 'absolute' : 'static',
      top: window.innerWidth <= 1024 ? '70px' : 'auto',
      left: window.innerWidth <= 1024 ? (active ? '0' : '-100%') : 'auto',
      width: window.innerWidth <= 1024 ? '100%' : 'auto',
      backgroundColor: window.innerWidth <= 1024 ? '#fff' : 'transparent',
      transition: window.innerWidth <= 1024 ? 'left 0.3s ease' : 'none',
      padding: window.innerWidth <= 1024 ? '1rem 0' : 0,
      boxShadow: window.innerWidth <= 1024 ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
    }),
    navLinks: {
      display: 'flex',
      flexDirection: window.innerWidth <= 1024 ? 'column' : 'row',
      marginBottom: window.innerWidth <= 1024 ? '1rem' : 0,
    },
    navLink: (active) => ({
      marginRight: window.innerWidth <= 1024 ? 0 : '1.5rem',
      marginBottom: window.innerWidth <= 1024 ? '0.5rem' : 0,
      textDecoration: 'none',
      color: active ? '#4f7efc' : '#333',
      fontWeight: 500,
      transition: 'color 0.2s',
    }),
    navButtons: {
      display: 'flex',
      flexDirection: window.innerWidth <= 1024 ? 'column' : 'row',
      alignItems: 'center',
    },
    btn: (primary) => ({
      marginLeft: window.innerWidth <= 1024 ? 0 : '0.8rem',
      marginBottom: window.innerWidth <= 1024 ? '0.3rem' : 0,
      padding: '0.45rem 1rem',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: primary ? '#4f7efc' : 'transparent',
      color: primary ? '#fff' : '#4f7efc',
      border: primary ? 'none' : '1px solid #4f7efc',
      transition: 'all 0.2s',
    }),
    hamburger: {
      display: window.innerWidth <= 1024 ? 'flex' : 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
    },
    hamburgerSpan: {
      height: '3px',
      width: '25px',
      backgroundColor: '#4f7efc',
      marginBottom: '4px',
      borderRadius: '2px',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>ResumeAI</Link>

        <div style={styles.navMenu(isMenuOpen)}>
          <div style={styles.navLinks}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={styles.navLink(location.pathname === link.path)}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={styles.navButtons}>
            <Link to="/login" style={styles.btn(false)}>Login</Link>
            <Link to="/signup" style={styles.btn(true)}>Signup</Link>
            <Link to="/builder" style={styles.btn(true)}>Resume Builder</Link>
            <Link to="/grader" style={styles.btn(false)}>Grade My Resume</Link>
          </div>
        </div>

        <button
          style={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={styles.hamburgerSpan}></span>
          <span style={styles.hamburgerSpan}></span>
          <span style={styles.hamburgerSpan}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
