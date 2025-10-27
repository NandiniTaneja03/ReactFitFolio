import React, { useState, useCallback } from 'react';
import UploadArea from '../ui/UploadArea';

const ResumeBuilder = () => {
  const [file, setFile] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleFileSelect = useCallback((selectedFile) => {
    setFile(selectedFile);
    // Reset previous data when new file is selected
    setResumeData(null);
    setPreview(false);
  }, []);

  const handleBuildResume = async () => {
    if (!file) {
      alert("Please upload a resume first!");
      return;
    }
    
    setLoading(true);
    // Simulate API call or resume processing
    setTimeout(() => {
      const mockResumeData = {
        personalInfo: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+1 (555) 123-4567",
          location: "New York, NY"
        },
        summary: "Experienced software developer with 5+ years in web development...",
        experience: [
          {
            title: "Senior Developer",
            company: "Tech Corp",
            period: "2020 - Present",
            description: "Lead development of web applications..."
          }
        ],
        education: [
          {
            degree: "BS Computer Science",
            school: "University of Example",
            year: "2019"
          }
        ],
        skills: ["JavaScript", "React", "Node.js", "Python"]
      };
      
      setResumeData(mockResumeData);
      setLoading(false);
    }, 2000);
  };

  const handleEditField = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const togglePreview = () => {
    setPreview(!preview);
  };

  return (
    <div className="resume-builder">
      <header className="builder-header">
        <h1>Build Your Resume</h1>
        <h2>Create a Professional Resume in Minutes</h2>
      </header>

      <div className="builder-container">
        {/* Upload Section */}
        <div className="upload-section">
          <UploadArea onFileSelect={handleFileSelect} />
          
          {file && (
            <div className="file-info">
              <p><strong>File:</strong> {file.name}</p>
              <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
            </div>
          )}

          <button 
            className="build-btn" 
            onClick={handleBuildResume}
            disabled={!file || loading}
          >
            {loading ? 'Processing...' : 'Build Resume'}
          </button>
        </div>

        {/* Resume Editor/Preview */}
        {resumeData && (
          <div className="resume-content">
            <div className="content-header">
              <h3>Your Resume</h3>
              <button className="preview-toggle" onClick={togglePreview}>
                {preview ? 'Edit Mode' : 'Preview Mode'}
              </button>
            </div>

            {preview ? (
              // Preview Mode
              <div className="resume-preview">
                <div className="preview-header">
                  <h2>{resumeData.personalInfo.name}</h2>
                  <p>{resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}</p>
                </div>
                
                <div className="preview-section">
                  <h3>Professional Summary</h3>
                  <p>{resumeData.summary}</p>
                </div>

                <div className="preview-section">
                  <h3>Experience</h3>
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h4>{exp.title} - {exp.company}</h4>
                      <p className="period">{exp.period}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>

                <div className="preview-section">
                  <h3>Education</h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <h4>{edu.degree}</h4>
                      <p>{edu.school} | {edu.year}</p>
                    </div>
                  ))}
                </div>

                <div className="preview-section">
                  <h3>Skills</h3>
                  <div className="skills-list">
                    {resumeData.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Edit Mode
              <div className="resume-editor">
                <div className="editor-section">
                  <h4>Personal Information</h4>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handleEditField('personalInfo', 'name', e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => handleEditField('personalInfo', 'email', e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => handleEditField('personalInfo', 'phone', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => handleEditField('personalInfo', 'location', e.target.value)}
                  />
                </div>

                <div className="editor-section">
                  <h4>Professional Summary</h4>
                  <textarea
                    placeholder="Write your professional summary..."
                    value={resumeData.summary}
                    onChange={(e) => setResumeData(prev => ({...prev, summary: e.target.value}))}
                    rows="4"
                  />
                </div>

                <div className="editor-section">
                  <h4>Skills</h4>
                  <div className="skills-input">
                    <input
                      type="text"
                      placeholder="Add a skill and press Enter"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          setResumeData(prev => ({
                            ...prev,
                            skills: [...prev.skills, e.target.value.trim()]
                          }));
                          e.target.value = '';
                        }
                      }}
                    />
                    <div className="current-skills">
                      {resumeData.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                          <button 
                            onClick={() => {
                              const newSkills = [...resumeData.skills];
                              newSkills.splice(index, 1);
                              setResumeData(prev => ({...prev, skills: newSkills}));
                            }}
                          >×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="download-btn">Download PDF</button>
              <button className="save-btn">Save Resume</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;