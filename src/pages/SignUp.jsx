import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      await signUp(name, email, password);
      navigate('/builder');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    card: {
      backgroundColor: 'white',
      maxWidth: '440px',
      width: '100%',
      padding: '48px 40px',
      borderRadius: '24px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      border: '1px solid #e2e8f0',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    logo: {
      fontWeight: '800',
      fontSize: '2rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '12px',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '12px',
      letterSpacing: '-0.025em',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.5',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    inputGroup: {
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.2s ease',
      backgroundColor: '#f8fafc',
      boxSizing: 'border-box',
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '16px',
      color: '#94a3b8',
      fontSize: '1.25rem',
    },
    passwordStrength: {
      marginTop: '8px',
      height: '4px',
      background: '#e2e8f0',
      borderRadius: '2px',
      overflow: 'hidden',
    },
    passwordStrengthBar: {
      height: '100%',
      transition: 'width 0.3s ease',
    },
    errorMessage: {
      backgroundColor: '#fef2f2',
      color: '#dc2626',
      padding: '12px 16px',
      borderRadius: '8px',
      fontSize: '0.875rem',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    successMessage: {
      backgroundColor: '#f0fdf4',
      color: '#166534',
      padding: '12px 16px',
      borderRadius: '8px',
      fontSize: '0.875rem',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    submitButton: {
      padding: '16px',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '12px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '32px',
      paddingTop: '24px',
      borderTop: '1px solid #e2e8f0',
    },
    footerText: {
      color: '#64748b',
      fontSize: '0.875rem',
    },
    footerLink: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.2s ease',
    },
    terms: {
      fontSize: '0.75rem',
      color: '#94a3b8',
      textAlign: 'center',
      marginTop: '16px',
      lineHeight: '1.4',
    },
  };

  const getPasswordStrength = (pass) => {
    if (!pass) return { width: 0, color: '#e2e8f0' };
    if (pass.length < 6) return { width: '25%', color: '#ef4444' };
    if (pass.length < 8) return { width: '50%', color: '#f59e0b' };
    if (pass.length < 10) return { width: '75%', color: '#10b981' };
    return { width: '100%', color: '#10b981' };
  };

  const strength = getPasswordStrength(password);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>ResumeAI</div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>
            Join thousands of professionals using AI-powered resume tools
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <div style={styles.errorMessage}>
              <span>⚠️</span>
              {error}
            </div>
          )}

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>👤</span>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#2563eb';
                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>📧</span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#2563eb';
                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>🔒</span>
            <input
              type="password"
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#2563eb';
                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
            <div style={styles.passwordStrength}>
              <div style={{
                ...styles.passwordStrengthBar,
                width: strength.width,
                backgroundColor: strength.color,
              }}></div>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>✅</span>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#2563eb';
                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitButton,
              opacity: loading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading ? (
              <>
                <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
                Creating Account...
              </>
            ) : (
              <>
                <span>🚀</span>
                Create Account
              </>
            )}
          </button>

          <p style={styles.terms}>
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{' '}
            <Link to="/login" style={styles.footerLink}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;