import React from "react";

const Features = () => {
  const featuresList = [
    {
      title: "Intelligent Resume Builder",
      description: "Create professional, ATS-optimized resumes with our intelligent templates and real-time guidance",
      color: "#2563eb",
      icon: "📝",
      highlights: ["Smart Templates", "Real-time Preview", "ATS Optimization"]
    },
    {
      title: "AI-Powered Analysis",
      description: "Advanced ML algorithms analyze content, keywords, and structure to provide actionable insights",
      color: "#7c3aed",
      icon: "🤖",
      highlights: ["Keyword Analysis", "Structure Scoring", "Industry Benchmarks"]
    },
    {
      title: "Performance Grading",
      description: "Comprehensive scoring system with detailed feedback on strengths and improvement areas",
      color: "#0ea5e9",
      icon: "📊",
      highlights: ["Multi-dimensional Scoring", "Comparative Analysis", "Progress Tracking"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and privacy controls ensure your sensitive information remains secure",
      color: "#10b981",
      icon: "🔒",
      highlights: ["End-to-end Encryption", "GDPR Compliant", "Zero Data Retention"]
    },
    {
      title: "Industry Templates",
      description: "Specialized templates designed for different industries and experience levels",
      color: "#f59e0b",
      icon: "🎨",
      highlights: ["100+ Templates", "Industry-Specific", "Custom Branding"]
    },
    {
      title: "Real-time Collaboration",
      description: "Share and collaborate on resumes with mentors, peers, or career advisors in real-time",
      color: "#ef4444",
      icon: "👥",
      highlights: ["Live Editing", "Comment System", "Version Control"]
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        padding: '80px 20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            backgroundColor: '#e0f2fe',
            color: '#0369a1',
            padding: '8px 24px',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '24px',
          }}>
            Platform Capabilities
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '24px',
            letterSpacing: '-0.025em',
            lineHeight: '1.1',
          }}>
            Advanced Features for <br />
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Modern Professionals</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Comprehensive tools designed to optimize every aspect of your resume creation 
            and career document management
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}
        >
          {featuresList.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '20px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = feature.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Feature header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: `${feature.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: feature.color,
                  flexShrink: 0,
                }}>
                  {feature.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    margin: '0 0 8px 0',
                    letterSpacing: '-0.025em',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: '0',
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '24px',
              }}>
                {feature.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: `${feature.color}10`,
                      color: feature.color,
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.025em',
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Decorative line */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: `linear-gradient(90deg, ${feature.color}00 0%, ${feature.color} 50%, ${feature.color}00 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0';
              }}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '60px 40px',
          marginTop: '80px',
          textAlign: 'center',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '16px',
            letterSpacing: '-0.025em',
          }}>
            Ready to Transform Your Resume?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            Join thousands of professionals who have accelerated their career growth 
            with our AI-powered platform
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              style={{
                padding: '16px 40px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Free Trial
            </button>
            <button
              style={{
                padding: '16px 40px',
                backgroundColor: 'transparent',
                color: '#2563eb',
                border: '2px solid #2563eb',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = '#2563eb';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2563eb';
              }}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;