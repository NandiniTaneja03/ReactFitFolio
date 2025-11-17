import React, { useState } from "react";
import "./ResumeGrader.css";

const mockFeedback = [
  "Great structure and layout",
  "Needs more technical skills highlighted",
  "Good use of action verbs",
  "Consider adding metrics for impact",
];

const mockStrengths = [
  "Clear formatting",
  "Strong work experience",
  "Relevant projects",
  "Good grammar",
];

const mockImprovements = [
  "Add more keywords",
  "Improve summary section",
  "Include certifications",
  "Highlight achievements numerically",
];

const ResumeGrader = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please select a file to analyze");
      return;
    }

    setLoading(true);

    // Simulate random analysis result
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 41) + 60; // 60-100
      const feedback = mockFeedback.sort(() => 0.5 - Math.random()).slice(0, 3);
      const strengths = mockStrengths.sort(() => 0.5 - Math.random()).slice(0, 2);
      const improvements = mockImprovements.sort(() => 0.5 - Math.random()).slice(0, 2);

      setAnalysis({ score: randomScore, feedback, strengths, improvements });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="resume-grader">
      <h1>Resume Grader</h1>

      {/* Beautiful file input + analyze button */}
      <div className="analysis-controls">
        <label className="file-upload">
          {file ? file.name : "Choose Resume File"}
          <input type="file" onChange={handleFileChange} />
        </label>
        <button
          className="btn analyze-btn"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* RESULTS */}
      {analysis && (
        <div className="analysis-results">
          <div className="score-display">
            <div
              className="score-circle"
              style={{
                borderColor:
                  analysis.score >= 85
                    ? "#4caf50"
                    : analysis.score >= 70
                    ? "#ff9800"
                    : "#f44336",
                color:
                  analysis.score >= 85
                    ? "#4caf50"
                    : analysis.score >= 70
                    ? "#ff9800"
                    : "#f44336",
              }}
            >
              {analysis.score}
            </div>
            <h3>Overall Score</h3>
          </div>

          <div className="feedback-section">
            <h4>Feedback</h4>
            {analysis.feedback.map((item, i) => (
              <div key={i} className="feedback-item">
                💬 {item}
              </div>
            ))}
          </div>

          <div className="strengths-section">
            <h4>Strengths</h4>
            {analysis.strengths.map((s, i) => (
              <div key={i} className="strength-item">
                ✅ {s}
              </div>
            ))}
          </div>

          <div className="improvements-section">
            <h4>Areas for Improvement</h4>
            {analysis.improvements.map((imp, i) => (
              <div key={i} className="improvement-item">
                💡 {imp}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeGrader;
