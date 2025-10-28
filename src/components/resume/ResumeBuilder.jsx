import React, { useState, useCallback } from 'react';
import UploadArea from '../ui/UploadArea';

const ResumeBuilder = () => {
  const [file, setFile] = useState(null);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: ""
    },
    summary: "",
    experience: [{
      title: "",
      company: "",
      period: "",
      description: ""
    }],
    education: [{
      degree: "",
      school: "",
      year: "",
      gpa: ""
    }],
    skills: []
  });
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [activeSection, setActiveSection] = useState('personal');

  const templates = {
    modern: { name: 'Modern', color: '#667eea', class: 'modern' },
    professional: { name: 'Professional', color: '#2c3e50', class: 'professional' },
    creative: { name: 'Creative', color: '#e74c3c', class: 'creative' },
    minimalist: { name: 'Minimalist', color: '#27ae60', class: 'minimalist' }
  };

  const styles = {
    // Main container
    resumeBuilder: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    },
    builderHeader: {
      textAlign: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '15px',
      marginBottom: '30px'
    },
    mainTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: '0.9'
    },

    // Two-column layout
    builderContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      maxWidth: '1400px',
      margin: '0 auto'
    },

    // Left Panel - Form
    leftPanel: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      height: 'fit-content'
    },
    formHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      borderBottom: '2px solid #f1f3f4',
      paddingBottom: '15px'
    },
    formTitle: {
      fontSize: '1.5rem',
      color: '#333',
      margin: '0'
    },
    templateSelector: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    templateOption: {
      padding: '8px 15px',
      border: '2px solid #e9ecef',
      borderRadius: '25px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    },
    sectionTabs: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px',
      borderBottom: '1px solid #e9ecef',
      paddingBottom: '15px',
      flexWrap: 'wrap'
    },
    sectionTab: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '25px',
      backgroundColor: '#f8f9fa',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    },
    activeSectionTab: {
      backgroundColor: '#667eea',
      color: 'white'
    },
    formSection: {
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '1.2rem',
      color: '#333',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      marginBottom: '15px',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      marginBottom: '15px',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginBottom: '15px'
    },
    removeButton: {
      padding: '5px 10px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '15px',
      cursor: 'pointer',
      fontSize: '0.8rem',
      marginLeft: '10px'
    },
    skillTag: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#667eea',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '15px',
      fontSize: '0.9rem',
      margin: '5px',
      gap: '8px'
    },

    // Right Panel - Preview
    rightPanel: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      height: 'fit-content'
    },
    previewHeader: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    previewTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px'
    },
    resumePreview: {
      minHeight: '800px',
      padding: '40px',
      backgroundColor: 'white',
      border: '2px solid #e9ecef',
      borderRadius: '10px'
    },

    // Template-specific styles
    modernPreview: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333'
    },
    professionalPreview: {
      fontFamily: "'Georgia', serif",
      color: '#2c3e50'
    },
    creativePreview: {
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: '#e74c3c'
    },
    minimalistPreview: {
      fontFamily: "'Arial', sans-serif",
      color: '#27ae60'
    }
  };

  const handleFileSelect = useCallback((selectedFile) => {
    setFile(selectedFile);
  }, []);

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      setResumeData(prev => ({
        ...prev,
        [section]: prev[section].map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }));
    } else {
      setResumeData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { title: "", company: "", period: "", description: "" }]
    }));
  };

  const removeExperience = (index) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { degree: "", school: "", year: "", gpa: "" }]
    }));
  };

  const removeEducation = (index) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, e.target.value.trim()]
      }));
      e.target.value = '';
    }
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const renderFormSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div style={styles.formSection}>
            <h4 style={styles.sectionTitle}>📝 Personal Information</h4>
            <input
              type="text"
              placeholder="Full Name"
              value={resumeData.personalInfo.name}
              onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              value={resumeData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Location"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="LinkedIn (optional)"
              value={resumeData.personalInfo.linkedin}
              onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Portfolio (optional)"
              value={resumeData.personalInfo.portfolio}
              onChange={(e) => handleInputChange('personalInfo', 'portfolio', e.target.value)}
              style={styles.input}
            />
          </div>
        );

      case 'summary':
        return (
          <div style={styles.formSection}>
            <h4 style={styles.sectionTitle}>📄 Professional Summary</h4>
            <textarea
              placeholder="Write a compelling summary of your professional background..."
              value={resumeData.summary}
              onChange={(e) => handleInputChange('summary', '', e.target.value)}
              style={styles.textarea}
            />
          </div>
        );

      case 'experience':
        return (
          <div style={styles.formSection}>
            <h4 style={styles.sectionTitle}>💼 Work Experience</h4>
            {resumeData.experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e9ecef', borderRadius: '8px' }}>
                <input
                  type="text"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => handleInputChange('experience', 'title', e.target.value, index)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Period (e.g., 2020 - Present)"
                  value={exp.period}
                  onChange={(e) => handleInputChange('experience', 'period', e.target.value, index)}
                  style={styles.input}
                />
                <textarea
                  placeholder="Job description and achievements..."
                  value={exp.description}
                  onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                  style={styles.textarea}
                />
                {resumeData.experience.length > 1 && (
                  <button
                    style={styles.removeButton}
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button style={styles.addButton} onClick={addExperience}>
              + Add Another Experience
            </button>
          </div>
        );

      case 'education':
        return (
          <div style={styles.formSection}>
            <h4 style={styles.sectionTitle}>🎓 Education</h4>
            {resumeData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e9ecef', borderRadius: '8px' }}>
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="School/University"
                  value={edu.school}
                  onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="GPA (optional)"
                  value={edu.gpa}
                  onChange={(e) => handleInputChange('education', 'gpa', e.target.value, index)}
                  style={styles.input}
                />
                {resumeData.education.length > 1 && (
                  <button
                    style={styles.removeButton}
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button style={styles.addButton} onClick={addEducation}>
              + Add Another Education
            </button>
          </div>
        );

      case 'skills':
        return (
          <div style={styles.formSection}>
            <h4 style={styles.sectionTitle}>🛠️ Skills</h4>
            <input
              type="text"
              placeholder="Type a skill and press Enter"
              onKeyPress={addSkill}
              style={styles.input}
            />
            <div style={{ marginTop: '15px' }}>
              {resumeData.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                  <button
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                    onClick={() => removeSkill(index)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderResumePreview = () => {
    const templateStyle = styles[`${selectedTemplate}Preview`] || styles.modernPreview;
    
    return (
      <div style={{...styles.resumePreview, ...templateStyle}}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: `3px solid ${templates[selectedTemplate].color}`, paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', margin: '0', color: templates[selectedTemplate].color }}>
            {resumeData.personalInfo.name || 'Your Name'}
          </h1>
          <div style={{ color: '#666', fontSize: '1.1rem', marginTop: '10px' }}>
            {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email} • </span>}
            {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone} • </span>}
            {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
          </div>
          {(resumeData.personalInfo.linkedin || resumeData.personalInfo.portfolio) && (
            <div style={{ color: '#888', fontSize: '1rem', marginTop: '5px' }}>
              {resumeData.personalInfo.linkedin && <span>LinkedIn: {resumeData.personalInfo.linkedin} • </span>}
              {resumeData.personalInfo.portfolio && <span>Portfolio: {resumeData.personalInfo.portfolio}</span>}
            </div>
          )}
        </div>

        {/* Professional Summary */}
        {resumeData.summary && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: templates[selectedTemplate].color, borderBottom: `2px solid ${templates[selectedTemplate].color}`, paddingBottom: '5px' }}>
              Professional Summary
            </h2>
            <p style={{ lineHeight: '1.6' }}>{resumeData.summary}</p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.some(exp => exp.title || exp.company) && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: templates[selectedTemplate].color, borderBottom: `2px solid ${templates[selectedTemplate].color}`, paddingBottom: '5px' }}>
              Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              (exp.title || exp.company) && (
                <div key={index} style={{ marginBottom: '15px' }}>
                  <h3 style={{ margin: '5px 0' }}>{exp.title} {exp.company && `- ${exp.company}`}</h3>
                  {exp.period && <p style={{ color: '#666', margin: '2px 0', fontStyle: 'italic' }}>{exp.period}</p>}
                  {exp.description && <p style={{ margin: '5px 0', lineHeight: '1.5' }}>{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education.some(edu => edu.degree || edu.school) && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: templates[selectedTemplate].color, borderBottom: `2px solid ${templates[selectedTemplate].color}`, paddingBottom: '5px' }}>
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              (edu.degree || edu.school) && (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <h3 style={{ margin: '5px 0' }}>{edu.degree}</h3>
                  <p style={{ margin: '2px 0' }}>{edu.school} {edu.year && `• ${edu.year}`}</p>
                  {edu.gpa && <p style={{ margin: '2px 0', color: '#666' }}>GPA: {edu.gpa}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: templates[selectedTemplate].color, borderBottom: `2px solid ${templates[selectedTemplate].color}`, paddingBottom: '5px' }}>
              Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index} 
                  style={{
                    backgroundColor: templates[selectedTemplate].color,
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '0.9rem'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={styles.resumeBuilder}>
      <header style={styles.builderHeader}>
        <h1 style={styles.mainTitle}>Build Your Resume</h1>
        <p style={styles.subtitle}>Fill in your details on the left and see your resume update live on the right</p>
      </header>

      <div style={styles.builderContainer}>
        {/* Left Panel - Form */}
        <div style={styles.leftPanel}>
          <div style={styles.formHeader}>
            <h3 style={styles.formTitle}>Resume Details</h3>
            <div style={styles.templateSelector}>
              {Object.entries(templates).map(([key, template]) => (
                <button
                  key={key}
                  style={{
                    ...styles.templateOption,
                    ...(selectedTemplate === key ? {
                      backgroundColor: template.color,
                      color: 'white',
                      borderColor: template.color
                    } : {})
                  }}
                  onClick={() => setSelectedTemplate(key)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.sectionTabs}>
            {['personal', 'summary', 'experience', 'education', 'skills'].map(section => (
              <button
                key={section}
                style={{
                  ...styles.sectionTab,
                  ...(activeSection === section ? styles.activeSectionTab : {})
                }}
                onClick={() => setActiveSection(section)}
              >
                {section === 'personal' && '👤 Personal'}
                {section === 'summary' && '📄 Summary'}
                {section === 'experience' && '💼 Experience'}
                {section === 'education' && '🎓 Education'}
                {section === 'skills' && '🛠️ Skills'}
              </button>
            ))}
          </div>

          {renderFormSection()}
        </div>

        {/* Right Panel - Preview */}
        <div style={styles.rightPanel}>
          <div style={styles.previewHeader}>
            <h3 style={styles.previewTitle}>Live Preview - {templates[selectedTemplate].name} Template</h3>
            <p>Your resume updates as you type</p>
          </div>
          {renderResumePreview()}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{
              padding: '12px 30px',
              backgroundColor: templates[selectedTemplate].color,
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;