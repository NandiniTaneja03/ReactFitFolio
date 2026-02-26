import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, signOut } = useAuth();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  const styles = {
    navbar: {
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontWeight: '800',
      fontSize: '1.75rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
      letterSpacing: '-0.025em',
    },
    navMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        borderTop: '1px solid #e2e8f0',
        zIndex: 1000,
      },
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
      },
    },
    navLink: (isActive) => ({
      color: isActive ? '#2563eb' : '#475569',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.95rem',
      position: 'relative',
      padding: '0.5rem 0',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#2563eb',
      },
      '::after': isActive ? {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '2px',
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        borderRadius: '2px',
      } : {},
    }),
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
      },
    },
    userGreeting: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#1e293b',
      fontWeight: '500',
      fontSize: '0.95rem',
    },
    userAvatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: '0.875rem',
    },
    authButtons: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    btn: (variant) => {
      const base = {
        padding: '0.75rem 1.5rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        border: 'none',
        fontFamily: "'Inter', sans-serif",
      };
      
      if (variant === 'primary') {
        return {
          ...base,
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
          ':hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
          },
        };
      } else if (variant === 'secondary') {
        return {
          ...base,
          background: 'transparent',
          color: '#2563eb',
          border: '1px solid #2563eb',
          ':hover': {
            background: 'rgba(37, 99, 235, 0.05)',
          },
        };
      } else if (variant === 'logout') {
        return {
          ...base,
          background: 'transparent',
          color: '#64748b',
          border: '1px solid #e2e8f0',
          fontSize: '0.85rem',
          padding: '0.5rem 1rem',
          ':hover': {
            background: '#f8fafc',
            color: '#ef4444',
            borderColor: '#ef4444',
          },
        };
      }
      return base;
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '30px',
      height: '21px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      '@media (max-width: 768px)': {
        display: 'flex',
      },
    },
    hamburgerLine: (isOpen) => ({
      width: '100%',
      height: '3px',
      background: isOpen ? '#2563eb' : '#475569',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
      transform: isOpen 
        ? 'rotate(45deg) translate(6px, 6px)' 
        : 'none',
      ':nth-child(2)': {
        opacity: isOpen ? 0 : 1,
        transform: isOpen ? 'translateX(-10px)' : 'none',
      },
      ':nth-child(3)': {
        transform: isOpen 
          ? 'rotate(-45deg) translate(7px, -6px)' 
          : 'none',
      },
    }),
    ctaButtons: {
      display: 'flex',
      gap: '0.75rem',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          ResumeAI
        </Link>

        {/* Desktop Menu */}
        <div style={{
          ...styles.navMenu,
          display: window.innerWidth <= 768 ? (isMenuOpen ? 'flex' : 'none') : 'flex',
        }}>
          <div style={styles.navLinks}>
            {navLinks.map((link) => (
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

          <div style={styles.userSection}>
            {currentUser ? (
              <>
                <div style={styles.userGreeting}>
                  <div style={styles.userAvatar}>
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span>Hi, {currentUser.name.split(' ')[0]}</span>
                </div>
                <div style={styles.ctaButtons}>
                  <Link 
                    to="/builder" 
                    style={styles.btn('primary')}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Builder
                  </Link>
                  <Link 
                    to="/grader" 
                    style={styles.btn('secondary')}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Grader
                  </Link>
                  <button 
                    onClick={handleLogout}
                    style={styles.btn('logout')}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div style={styles.authButtons}>
                <Link 
                  to="/login" 
                  style={styles.btn('secondary')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  style={styles.btn('primary')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          style={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={styles.hamburgerLine(isMenuOpen)}></span>
          <span style={styles.hamburgerLine(isMenuOpen)}></span>
          <span style={styles.hamburgerLine(isMenuOpen)}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;