import React, { useState } from 'react';
import { useResumes, useCreateResume, useUpdateResume,  } from '../../hooks/useGraphQL';

import './ResumeBuilder.css';

// Utility to remove __typename from GraphQL objects
const removeTypename = (obj) => {
  if (Array.isArray(obj)) return obj.map(removeTypename);

  if (obj && typeof obj === "object") {
    const cleaned = {};
    Object.keys(obj).forEach((key) => {
      if (key !== "__typename") cleaned[key] = removeTypename(obj[key]);
    });
    return cleaned;
  }

  return obj;
};

const ResumeBuilder = () => {
  const { resumes, loading, refetch } = useResumes();
  const { createResume, loading: creating } = useCreateResume();
  const { updateResume, loading: updating } = useUpdateResume();

  const emptyResume = {
    title: 'My Resume',
    personalInfo: { name: '', email: '', phone: '', location: '', jobTitle: '' },
    experience: [],
    education: [],
    skills: [],
    professionalSummary: '',
    template: 'professional'
  };

  const [resumeData, setResumeData] = useState(emptyResume);
  const [newSkill, setNewSkill] = useState('');
  const [expForm, setExpForm] = useState({ role: '', company: '', startDate: '', endDate: '', description: '' });
  const [eduForm, setEduForm] = useState({ degree: '', school: '', startDate: '', endDate: '' });

  /* -------------------------
     CREATE NEW RESUME
  --------------------------- */
  const handleCreateNewResume = async () => {
    try {
      const clean = removeTypename(emptyResume);
      const newResume = await createResume(clean);
      setResumeData(newResume);
      refetch();
      alert("New resume created!");
    } catch (err) {
      alert(err.message);
    }
  };

  /* -------------------------
     SAVE RESUME (UPDATE / NEW)
  --------------------------- */
  const handleSaveResume = async () => {
    try {
      const clean = removeTypename(resumeData);

      if (resumeData.id) {
        await updateResume(resumeData.id, clean);
        alert("Resume updated!");
      } else {
        const newResume = await createResume(clean);
        setResumeData(newResume);
        alert("Resume created!");
      }

      refetch();
    } catch (err) {
      alert(err.message);
    }
  };

  /* -------------------------
     LOAD RESUME FOR EDITING
  --------------------------- */
  const handleLoadResume = (resume) => {
    const cleaned = removeTypename(resume);
    setResumeData(cleaned);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="resume-layout">

      {/* LEFT FORM */}
      <div className="resume-editor">
        <div className="form-header">
          <h2>{resumeData.id ? 'Edit Resume' : 'New Resume'}</h2>

          <button className="btn save-btn" onClick={handleSaveResume}>
            {creating || updating ? "Saving..." : "Save"}
          </button>
        </div>

        {/* PERSONAL INFO */}
        <div className="card">
          <h3>Personal Info</h3>
          {['name','email','phone','location','jobTitle'].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.toUpperCase()}
              value={resumeData.personalInfo[field]}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: {
                    ...resumeData.personalInfo,
                    [field]: e.target.value
                  }
                })
              }
              className="input-field"
            />
          ))}
        </div>

        {/* SUMMARY */}
        <div className="card">
          <h3>Professional Summary</h3>
          <textarea
            className="textarea-field"
            placeholder="Write summary..."
            value={resumeData.professionalSummary}
            onChange={(e) => setResumeData({ ...resumeData, professionalSummary: e.target.value })}
          />
        </div>

        {/* SKILLS */}
        <div className="card">
          <h3>Skills</h3>
          <div className="skill-input-row">
            <input
              type="text"
              className="input-field"
              placeholder="Add skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button className="btn add-btn" onClick={() => {
              if (!newSkill.trim()) return;
              setResumeData({ ...resumeData, skills: [...resumeData.skills, newSkill] });
              setNewSkill('');
            }}>Add</button>
          </div>

          <ul className="skill-list-edit">
            {resumeData.skills.map((s, i) => (
              <li key={i}>
                {s}
                <button className="delete-btn" onClick={() =>
                  setResumeData({
                    ...resumeData,
                    skills: resumeData.skills.filter((_, idx) => idx !== i)
                  })
                }>x</button>
              </li>
            ))}
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="card">
          <h3>Experience</h3>

          <input type="text" className="input-field" placeholder="Role"
            value={expForm.role} onChange={(e) => setExpForm({ ...expForm, role: e.target.value })} />

          <input type="text" className="input-field" placeholder="Company"
            value={expForm.company} onChange={(e) => setExpForm({ ...expForm, company: e.target.value })} />

          <div className="row-2">
            <input type="date" className="input-field" value={expForm.startDate}
              onChange={(e) => setExpForm({ ...expForm, startDate: e.target.value })} />

            <input type="date" className="input-field" value={expForm.endDate}
              onChange={(e) => setExpForm({ ...expForm, endDate: e.target.value })} />
          </div>

          <textarea className="textarea-field" placeholder="Description"
            value={expForm.description}
            onChange={(e) => setExpForm({ ...expForm, description: e.target.value })} />

          <button className="btn add-btn" onClick={() => {
            setResumeData({ ...resumeData, experience: [...resumeData.experience, expForm] });
            setExpForm({ role: '', company: '', startDate: '', endDate: '', description: '' });
          }}>Add Experience</button>
        </div>

        {/* EDUCATION */}
        <div className="card">
          <h3>Education</h3>

          <input type="text" className="input-field" placeholder="Degree"
            value={eduForm.degree} onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })} />

          <input type="text" className="input-field" placeholder="School"
            value={eduForm.school} onChange={(e) => setEduForm({ ...eduForm, school: e.target.value })} />

          <div className="row-2">
            <input type="date" className="input-field" value={eduForm.startDate}
              onChange={(e) => setEduForm({ ...eduForm, startDate: e.target.value })} />

            <input type="date" className="input-field" value={eduForm.endDate}
              onChange={(e) => setEduForm({ ...eduForm, endDate: e.target.value })} />
          </div>

          <button className="btn add-btn" onClick={() => {
            setResumeData({ ...resumeData, education: [...resumeData.education, eduForm] });
            setEduForm({ degree: '', school: '', startDate: '', endDate: '' });
          }}>Add Education</button>
        </div>

      </div>

      {/* LIVE PREVIEW */}
      <div className="resume-preview">
        <div className="preview-card">
          <h1 className="preview-name">{resumeData.personalInfo.name || "Your Name"}</h1>
          <p className="preview-title">{resumeData.personalInfo.jobTitle || "Your Job Title"}</p>

          <div className="preview-contact">
            <p>{resumeData.personalInfo.email}</p>
            <p>{resumeData.personalInfo.phone}</p>
            <p>{resumeData.personalInfo.location}</p>
          </div>

          <hr />

          <h2 className="section-header">Professional Summary</h2>
          <p className="section-text">{resumeData.professionalSummary || "Write a short professional summary..."}</p>

          <h2 className="section-header">Skills</h2>
          <ul className="skill-list">
            {resumeData.skills.length === 0 ? <li>Add your skills...</li> :
              resumeData.skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>

          <h2 className="section-header">Experience</h2>
          {resumeData.experience.length === 0 ? (
            <p>Add your experience...</p>
          ) : (
            resumeData.experience.map((exp, i) => (
              <div key={i} className="exp-block">
                <strong>{exp.role}</strong> — {exp.company}
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.description}</p>
              </div>
            ))
          )}

          <h2 className="section-header">Education</h2>
          {resumeData.education.length === 0 ? (
            <p>Add education...</p>
          ) : (
            resumeData.education.map((edu, i) => (
              <div key={i} className="edu-block">
                <strong>{edu.degree}</strong> — {edu.school}
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="saved-column">
        <h2>Your Resumes</h2>
        <button className="btn add-btn" onClick={handleCreateNewResume}>+ New Resume</button>

        {resumes.map((r) => (
          <div key={r.id} className="resume-card">
            <strong>{r.title}</strong>
            <button className="btn edit-btn" onClick={() => handleLoadResume(r)}>
              Edit
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ResumeBuilder;
