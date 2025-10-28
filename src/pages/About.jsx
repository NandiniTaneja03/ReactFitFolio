import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML5 & CSS3', icon: '🎨', color: '#e34f26' },
    { name: 'JavaScript ES6+', icon: '⚡', color: '#f7df1e' },
    { name: 'React & Hooks', icon: '⚛️', color: '#61dafb' },
    { name: 'Responsive Design', icon: '📱', color: '#37b24d' },
    { name: 'UI/UX Principles', icon: '✨', color: '#7950f2' },
    { name: 'API Integration', icon: '🔗', color: '#228be6' },
    { name: 'Modern CSS', icon: '🎯', color: '#cc5de8' },
    { name: 'Git & GitHub', icon: '📚', color: '#f06595' }
  ];

  const teamMembers = [
    { name: 'Frontend Developers', role: '2nd Year FEE Students', description: 'Passionate about creating beautiful and functional user interfaces' },
    { name: 'AI Integration', role: 'Machine Learning', description: 'Leveraging cutting-edge AI for resume analysis and suggestions' },
    { name: 'UI/UX Design', role: 'User Experience', description: 'Focusing on intuitive and engaging user experiences' }
  ];

  const styles = {
    // Main container
    aboutPage: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    },
    
    // Header
    aboutHeader: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    mainTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    headerSubtitle: {
      fontSize: '1.4rem',
      opacity: '0.95',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '300'
    },
    
    // Main content
    aboutContent: {
      padding: '80px 20px'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    
    // Sections
    aboutSection: {
      backgroundColor: 'white',
      padding: '50px',
      borderRadius: '20px',
      marginBottom: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '1px solid #f1f3f4'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '30px',
      textAlign: 'center',
      position: 'relative'
    },
    sectionTitleUnderline: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: '15px auto 0',
      borderRadius: '2px'
    },
    sectionText: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#555',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 30px'
    },
    
    // Project info
    projectInfo: {
      backgroundColor: '#e8f5e8',
      padding: '30px',
      borderRadius: '15px',
      border: '2px solid #4caf50',
      marginTop: '30px',
      textAlign: 'center'
    },
    projectInfoText: {
      fontSize: '1.3rem',
      color: '#2e7d32',
      fontWeight: '600',
      margin: '0'
    },
    
    // Skills grid
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    skillItem: {
      backgroundColor: 'white',
      padding: '30px 25px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      border: '2px solid #f1f3f4',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    skillItemHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      borderColor: '#667eea'
    },
    skillIcon: {
      fontSize: '3rem',
      marginBottom: '15px',
      display: 'block'
    },
    skillName: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#333',
      margin: '0'
    },
    
    // Team section
    teamSection: {
      backgroundColor: 'white',
      padding: '50px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '1px solid #f1f3f4'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '40px'
    },
    teamCard: {
      backgroundColor: '#f8f9fa',
      padding: '35px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    teamCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      borderColor: '#667eea'
    },
    teamName: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '10px'
    },
    teamRole: {
      fontSize: '1.1rem',
      color: '#667eea',
      fontWeight: '600',
      marginBottom: '15px'
    },
    teamDescription: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
      margin: '0'
    },
    
    // Mission section
    missionSection: {
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '60px 50px',
      borderRadius: '20px',
      textAlign: 'center',
      marginTop: '50px'
    },
    missionTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '20px'
    },
    missionText: {
      fontSize: '1.3rem',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: '0 auto',
      opacity: '0.95'
    },
    
    // Stats section
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '50px'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      border: '2px solid #f1f3f4'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '800',
      color: '#667eea',
      margin: '0'
    },
    statLabel: {
      fontSize: '1.1rem',
      color: '#666',
      fontWeight: '600',
      margin: '10px 0 0 0'
    }
  };

  return (
    <div style={styles.aboutPage}>
      {/* Header */}
      <header style={styles.aboutHeader}>
        <div style={styles.headerContainer}>
          <h1 style={styles.mainTitle}>About ResumeAI</h1>
          <p style={styles.headerSubtitle}>
            An innovative project developed by 2nd year FEE students to revolutionize 
            resume analysis using cutting-edge AI technology and modern web development
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main style={styles.aboutContent}>
        <div style={styles.container}>
          {/* Project Overview */}
          <section style={styles.aboutSection}>
            <h2 style={styles.sectionTitle}>
              Our Project Vision
              <div style={styles.sectionTitleUnderline}></div>
            </h2>
            <p style={styles.sectionText}>
              ResumeAI is a cutting-edge web application designed to help job seekers 
              improve their resumes through artificial intelligence. We combine modern 
              web technologies with machine learning to provide instant, actionable 
              feedback on resume content, formatting, and effectiveness.
            </p>
            
            <div style={styles.projectInfo}>
              <p style={styles.projectInfoText}>
                🎓 This project was developed as part of our 2nd Year Front-End Engineering (FEE) course, 
                showcasing our skills in modern web development and user experience design.
              </p>
            </div>
          </section>
          
          {/* Skills & Technologies */}
          <section style={styles.aboutSection}>
            <h2 style={styles.sectionTitle}>
              Technologies & Skills
              <div style={styles.sectionTitleUnderline}></div>
            </h2>
            <p style={styles.sectionText}>
              This project demonstrates our proficiency in modern web development technologies 
              and best practices we've mastered during our 2nd year studies.
            </p>
            
            <div style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  style={styles.skillItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.skillItemHover.transform;
                    e.currentTarget.style.boxShadow = styles.skillItemHover.boxShadow;
                    e.currentTarget.style.borderColor = styles.skillItemHover.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = styles.skillItem.boxShadow;
                    e.currentTarget.style.borderColor = styles.skillItem.borderColor;
                  }}
                >
                  <span style={styles.skillIcon}>{skill.icon}</span>
                  <h3 style={styles.skillName}>{skill.name}</h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Team Section */}
          <section style={styles.teamSection}>
            <h2 style={styles.sectionTitle}>
              Our Approach
              <div style={styles.sectionTitleUnderline}></div>
            </h2>
            <p style={styles.sectionText}>
              We've combined our front-end engineering skills with innovative thinking 
              to create a comprehensive resume analysis platform.
            </p>
            
            <div style={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  style={styles.teamCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.teamCardHover.transform;
                    e.currentTarget.style.boxShadow = styles.teamCardHover.boxShadow;
                    e.currentTarget.style.borderColor = styles.teamCardHover.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = styles.teamCard.borderColor;
                  }}
                >
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.teamDescription}>{member.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Stats Section */}
          <div style={styles.statsSection}>
            <div style={styles.statCard}>
              <h3 style={styles.statNumber}>100%</h3>
              <p style={styles.statLabel}>Modern Tech Stack</p>
            </div>
            <div style={styles.statCard}>
              <h3 style={styles.statNumber}>AI-Powered</h3>
              <p style={styles.statLabel}>Smart Analysis</p>
            </div>
            <div style={styles.statCard}>
              <h3 style={styles.statNumber}>2nd Year</h3>
              <p style={styles.statLabel}>FEE Project</p>
            </div>
            <div style={styles.statCard}>
              <h3 style={styles.statNumber}>User-First</h3>
              <p style={styles.statLabel}>Design Approach</p>
            </div>
          </div>
          
          {/* Mission Statement */}
          <section style={styles.missionSection}>
            <h2 style={styles.missionTitle}>Our Mission</h2>
            <p style={styles.missionText}>
              To empower job seekers with AI-driven tools that transform resume writing 
              from a daunting task into an opportunity for professional growth and success. 
              We believe everyone deserves a resume that truly represents their potential.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;