import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML5 & CSS3', icon: '🎨', color: '#e34f26' },
    { name: 'JavaScript ES6+', icon: '⚡', color: '#f7df1e' },
    { name: 'React & Hooks', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'Responsive Design', icon: '📱', color: '#37b24d' },
    { name: 'UI/UX Principles', icon: '✨', color: '#7c3aed' },
    { name: 'API Integration', icon: '🔗', color: '#2563eb' },
    { name: 'Tailwind CSS', icon: '🎯', color: '#06b6d4' },
    { name: 'Git & GitHub', icon: '📚', color: '#181717' },
    { name: 'Testing', icon: '🧪', color: '#e63757' },
  ];

  const teamMembers = [
    { 
      name: 'Frontend Engineering', 
      role: 'Modern Web Development', 
      description: 'Building responsive, accessible interfaces with React, TypeScript, and modern CSS',
      icon: '💻'
    },
    { 
      name: 'AI Integration', 
      role: 'Machine Learning & NLP', 
      description: 'Implementing cutting-edge AI models for intelligent resume analysis and suggestions',
      icon: '🤖'
    },
    { 
      name: 'UX Research', 
      role: 'User-Centered Design', 
      description: 'Conducting user research and testing to create intuitive, engaging experiences',
      icon: '✨'
    },
    { 
      name: 'DevOps & Deployment', 
      role: 'Cloud Infrastructure', 
      description: 'CI/CD pipelines, containerization, and scalable cloud deployment strategies',
      icon: '🚀'
    }
  ];

  const styles = {
    // Main container
    aboutPage: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    
    // Header
    aboutHeader: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: 'white',
      padding: '120px 20px 100px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    mainTitle: {
      fontSize: '4rem',
      fontWeight: '800',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.025em',
    },
    headerSubtitle: {
      fontSize: '1.25rem',
      opacity: '0.95',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400',
      color: '#e2e8f0',
      marginTop: '24px',
    },
    
    // Main content
    aboutContent: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    
    // Sections
    aboutSection: {
      backgroundColor: 'white',
      padding: '60px 48px',
      borderRadius: '24px',
      marginBottom: '48px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      border: '1px solid #e2e8f0',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    aboutSectionHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '16px',
      textAlign: 'center',
      letterSpacing: '-0.025em',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 48px',
      lineHeight: '1.6',
    },
    
    // Skills grid
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: '32px',
    },
    skillItem: {
      backgroundColor: 'white',
      padding: '32px 24px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    skillIcon: {
      fontSize: '3rem',
      marginBottom: '8px',
      width: '80px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: '#f1f5f9',
    },
    skillName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0',
      letterSpacing: '-0.025em',
    },
    
    // Team section
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
      marginTop: '48px',
    },
    teamCard: {
      backgroundColor: 'white',
      padding: '40px 32px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    teamIcon: {
      fontSize: '3rem',
      width: '80px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: '#f1f5f9',
      marginBottom: '8px',
    },
    teamName: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0',
      letterSpacing: '-0.025em',
    },
    teamRole: {
      fontSize: '1rem',
      color: '#2563eb',
      fontWeight: '600',
      margin: '0',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    teamDescription: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.6',
      margin: '0',
    },
    
    // Mission section
    missionSection: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '80px 48px',
      borderRadius: '24px',
      textAlign: 'center',
      marginTop: '64px',
      position: 'relative',
      overflow: 'hidden',
    },
    missionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
    },
    missionText: {
      fontSize: '1.25rem',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: '0 auto',
      color: '#cbd5e1',
      fontWeight: '400',
    },
    
    // Stats section
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      margin: '64px 0',
    },
    statCard: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#64748b',
      fontWeight: '600',
      margin: '8px 0 0 0',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    
    // Decorative elements
    badge: {
      display: 'inline-block',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '24px',
    },
  };

  return (
    <div style={styles.aboutPage}>
      {/* Header */}
      <header style={styles.aboutHeader}>
        <div style={styles.headerContainer}>
          <div style={styles.badge}>Project Showcase</div>
          <h1 style={styles.mainTitle}>ResumeAI Platform</h1>
          <p style={styles.headerSubtitle}>
            An advanced AI-powered resume analysis platform developed by 2nd year 
            Frontend Engineering students. Combining modern web technologies with 
            machine learning to revolutionize career document optimization.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main style={styles.aboutContent}>
        {/* Project Overview */}
        <section 
          style={styles.aboutSection}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
          }}
        >
          <h2 style={styles.sectionTitle}>Project Vision & Architecture</h2>
          <p style={styles.sectionSubtitle}>
            A full-stack application demonstrating modern web development practices, 
            AI integration, and user-centered design principles.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '1.125rem',
              color: '#475569',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto 32px',
            }}>
              ResumeAI represents a comprehensive implementation of contemporary 
              web technologies, featuring real-time AI analysis, scalable architecture, 
              and responsive design. The project serves as both a practical tool for 
              job seekers and a demonstration of our technical capabilities.
            </p>
            
            <div style={{
              backgroundColor: '#f0f9ff',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #0ea5e9',
              marginTop: '32px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '32px auto 0',
            }}>
              <p style={{
                fontSize: '1.25rem',
                color: '#0369a1',
                fontWeight: '600',
                margin: '0',
              }}>
                🎓 Academic Excellence Project — Developed as part of our 2nd Year 
                Frontend Engineering curriculum, showcasing proficiency in modern 
                web development frameworks and user experience design.
              </p>
            </div>
          </div>
        </section>
        
        {/* Technologies */}
        <section style={styles.aboutSection}>
          <h2 style={styles.sectionTitle}>Technology Stack</h2>
          <p style={styles.sectionSubtitle}>
            Modern technologies and frameworks employed in this project
          </p>
          
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                style={styles.skillItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={styles.skillIcon}>
                  <span>{skill.icon}</span>
                </div>
                <h3 style={styles.skillName}>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Team Section */}
        <section style={styles.aboutSection}>
          <h2 style={styles.sectionTitle}>Development Approach</h2>
          <p style={styles.sectionSubtitle}>
            Cross-disciplinary collaboration and modern development practices
          </p>
          
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                style={styles.teamCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={styles.teamIcon}>
                  <span>{member.icon}</span>
                </div>
                <h3 style={styles.teamName}>{member.name}</h3>
                <div style={styles.teamRole}>{member.role}</div>
                <p style={styles.teamDescription}>{member.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Stats */}
        <div style={styles.statsSection}>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>100%</h3>
            <p style={styles.statLabel}>Modern Stack</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>AI-Powered</h3>
            <p style={styles.statLabel}>Analysis Engine</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>Enterprise</h3>
            <p style={styles.statLabel}>Grade Architecture</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>User-First</h3>
            <p style={styles.statLabel}>Design Philosophy</p>
          </div>
        </div>
        
        {/* Mission */}
        <section style={styles.missionSection}>
          <h2 style={styles.missionTitle}>Our Mission Statement</h2>
          <p style={styles.missionText}>
            To democratize access to professional career advancement tools through 
            intelligent technology. We're building platforms that transform complex 
            career document optimization into accessible, actionable insights for 
            professionals at all stages of their journey.
          </p>
          <div style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>Innovation</span>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>Accessibility</span>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>Excellence</span>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>Impact</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;