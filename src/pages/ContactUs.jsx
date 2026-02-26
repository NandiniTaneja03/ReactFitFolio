import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({ name, email, message });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    contactCard: {
      backgroundColor: 'white',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      borderRadius: '24px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
    },
    infoSection: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: 'white',
      padding: '60px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    infoTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
    },
    infoText: {
      fontSize: '1.125rem',
      lineHeight: '1.6',
      marginBottom: '32px',
      opacity: '0.9',
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    contactIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
    },
    contactText: {
      fontSize: '0.875rem',
      opacity: '0.9',
    },
    contactLabel: {
      fontSize: '0.75rem',
      opacity: '0.7',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    formSection: {
      padding: '60px 40px',
      backgroundColor: 'white',
    },
    formTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px',
      letterSpacing: '-0.025em',
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#64748b',
      marginBottom: '32px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
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
      transition: 'all 0.3s ease',
      backgroundColor: '#f8fafc',
    },
    textarea: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.3s ease',
      backgroundColor: '#f8fafc',
      minHeight: '140px',
      resize: 'vertical',
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '16px',
      color: '#94a3b8',
      fontSize: '1.25rem',
    },
    submitButton: {
      padding: '16px 32px',
      backgroundColor: '#2563eb',
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
    },
    successMessage: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      animation: 'slideIn 0.3s ease',
    },
    '@keyframes slideIn': {
      from: { transform: 'translateY(-10px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactCard}>
        {/* Information Section */}
        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <p style={styles.infoText}>
            Have questions about our AI-powered resume analysis platform? 
            We're here to help you optimize your career documents and achieve better results.
          </p>
          
          <div style={styles.contactDetails}>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📧</div>
              <div>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactText}>support@resumeai.com</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>⏰</div>
              <div>
                <div style={styles.contactLabel}>Response Time</div>
                <div style={styles.contactText}>Within 24 hours</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📍</div>
              <div>
                <div style={styles.contactLabel}>Location</div>
                <div style={styles.contactText}>FEE Department, Academic Campus</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div style={styles.formSection}>
          <h3 style={styles.formTitle}>Send us a message</h3>
          <p style={styles.formSubtitle}>
            Fill out the form below and our team will get back to you as soon as possible.
          </p>

          {success && (
            <div style={styles.successMessage}>
              <span>✅</span>
              <div>
                <strong>Message sent successfully!</strong>
                <div style={{ fontSize: '0.875rem', opacity: '0.9' }}>
                  We'll get back to you within 24 hours.
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>👤</span>
              <input
                type="text"
                placeholder="Your full name"
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
                placeholder="Your email address"
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
              <span style={styles.inputIcon}>💬</span>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={styles.textarea}
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
                backgroundColor: loading ? '#94a3b8' : '#2563eb',
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
                  Sending...
                </>
              ) : (
                <>
                  <span>🚀</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;