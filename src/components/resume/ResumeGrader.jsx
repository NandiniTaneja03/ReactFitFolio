import React, { useState, useCallback } from 'react';
import { useResumeAnalysis } from '../../hooks/useResumeAnalysis';
import UploadArea from '../ui/UploadArea';

const ResumeGrader = () => {
  const [file, setFile] = useState(null);
  const { analyzeResume, score, feedback, loading } = useResumeAnalysis();

  const handleFileSelect = useCallback((selectedFile) => {
    setFile(selectedFile);
  }, []);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume first!");
      return;
    }
    await analyzeResume(file);
  };

  return (
    <div className="resume-grader">
      <header className="grading-header">
        <h1>Upload Your Resume</h1>
        <h2>Your Resume Grading Assistant</h2>
      </header>

      <div className="grading-container">
        <UploadArea onFileSelect={handleFileSelect} />
        
        {file && (
          <div className="file-info">
            <p><strong>File:</strong> {file.name}</p>
            <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        <button 
          className="analyze-btn" 
          onClick={handleAnalyze}
          disabled={!file || loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>

        {score !== null && (
          <div className="results-section">
            <div className="score-display">
              <div className="score-circle">
                <div className="score-text">{score}</div>
              </div>
              <h3>Overall Resume Score</h3>
            </div>
            
            <div className="feedback-grid">
              {feedback.map((item, index) => (
                <div key={index} className="feedback-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeGrader;