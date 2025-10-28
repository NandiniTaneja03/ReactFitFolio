import React, { useState, useCallback } from 'react';
import { useResumeAnalysis } from '../../hooks/useResumeAnalysis';
import UploadArea from '../ui/UploadArea';

const ResumeGrader = () => {
  const [file, setFile] = useState(null);
  const { analyzeResume, score, feedback, loading } = useResumeAnalysis();

  const styles = {
    // Main container
    resumeGrader: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    },
    
    // Header
    gradingHeader: {
      textAlign: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      color: 'white',
      borderRadius: '20px',
      marginBottom: '40px',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)'
    },
    mainTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '15px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.4rem',
      opacity: '0.95',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.5'
    },
    
    // Main container
    gradingContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '50px',
      boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
      border: '1px solid #f1f3f4'
    },
    
    // Upload section
    uploadSection: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    
    // File info
    fileInfo: {
      backgroundColor: '#e8f5e8',
      padding: '20px',
      borderRadius: '15px',
      margin: '25px 0',
      border: '2px solid #4caf50',
      boxShadow: '0 5px 15px rgba(76, 175, 80, 0.1)',
      animation: 'fadeIn 0.5s ease-in'
    },
    fileInfoText: {
      margin: '8px 0',
      fontSize: '1.1rem',
      color: '#2e7d32',
      fontWeight: '500'
    },
    
    // Analyze button
    analyzeBtn: {
      padding: '18px 40px',
      fontSize: '1.3rem',
      fontWeight: '700',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
      margin: '20px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    analyzeBtnHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(76, 175, 80, 0.6)',
      backgroundColor: '#45a049'
    },
    analyzeBtnDisabled: {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'none'
    },
    loadingPulse: {
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      animation: 'loading 1.5s infinite'
    },
    
    // Results section
    resultsSection: {
      marginTop: '50px',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
      border: '2px solid #e9ecef',
      animation: 'slideUp 0.6s ease-out'
    },
    
    // Score display
    scoreDisplay: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    scoreCircle: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      background: `conic-gradient(#4caf50 ${score * 3.6}deg, #e9ecef 0deg)`,
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
      animation: 'grow 1s ease-out'
    },
    scoreCircleInner: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
    },
    scoreText: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: '#4caf50',
      margin: '0'
    },
    scoreLabel: {
      fontSize: '1.5rem',
      color: '#333',
      fontWeight: '600',
      marginTop: '15px'
    },
    scoreSubtitle: {
      color: '#666',
      fontSize: '1.1rem',
      marginTop: '5px'
    },
    
    // Feedback grid
    feedbackGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    feedbackCard: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      borderLeft: '5px solid #4caf50',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    feedbackCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
    },
    feedbackIcon: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      fontSize: '1.5rem',
      opacity: '0.1'
    },
    
    // Animation keyframes (as inline styles won't work, we'll use CSS classes or handle differently)
    // For now, we'll rely on hover effects and transitions
  };

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

  // Get score color based on value
  const getScoreColor = (score) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    return '#f44336';
  };

  // Get score feedback
  const getScoreFeedback = (score) => {
    if (score >= 90) return 'Excellent!';
    if (score >= 80) return 'Great Job!';
    if (score >= 70) return 'Good Work!';
    if (score >= 60) return 'Needs Improvement';
    return 'Needs Major Work';
  };

  return (
    <div style={styles.resumeGrader}>
      <header style={styles.gradingHeader}>
        <h1 style={styles.mainTitle}>AI Resume Grader</h1>
        <p style={styles.subtitle}>
          Get instant, detailed feedback on your resume with our advanced AI analysis
        </p>
      </header>

      <div style={styles.gradingContainer}>
        <div style={styles.uploadSection}>
          <UploadArea onFileSelect={handleFileSelect} />
          
          {file && (
            <div style={styles.fileInfo}>
              <p style={styles.fileInfoText}>
                <strong>📄 File:</strong> {file.name}
              </p>
              <p style={styles.fileInfoText}>
                <strong>📊 Size:</strong> {(file.size / 1024).toFixed(2)} KB
              </p>
              <p style={{...styles.fileInfoText, color: '#4caf50', fontWeight: '600'}}>
                ✅ Ready to analyze!
              </p>
            </div>
          )}

          <button 
            style={{
              ...styles.analyzeBtn,
              ...(!file || loading ? styles.analyzeBtnDisabled : {})
            }}
            onClick={handleAnalyze}
            disabled={!file || loading}
            onMouseEnter={(e) => {
              if (file && !loading) {
                e.target.style.transform = styles.analyzeBtnHover.transform;
                e.target.style.boxShadow = styles.analyzeBtnHover.boxShadow;
                e.target.style.backgroundColor = styles.analyzeBtnHover.backgroundColor;
              }
            }}
            onMouseLeave={(e) => {
              if (file && !loading) {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = styles.analyzeBtn.boxShadow;
                e.target.style.backgroundColor = styles.analyzeBtn.backgroundColor;
              }
            }}
          >
            {loading && <div style={styles.loadingPulse}></div>}
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '3px solid transparent',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Analyzing Your Resume...
              </span>
            ) : (
              '🚀 Analyze My Resume'
            )}
          </button>
        </div>

        {score !== null && (
          <div style={styles.resultsSection}>
            <div style={styles.scoreDisplay}>
              <div style={{
                ...styles.scoreCircle,
                background: `conic-gradient(${getScoreColor(score)} ${score * 3.6}deg, #e9ecef 0deg)`
              }}>
                <div style={styles.scoreCircleInner}>
                  <h2 style={{
                    ...styles.scoreText,
                    color: getScoreColor(score)
                  }}>
                    {score}
                  </h2>
                </div>
              </div>
              <h3 style={styles.scoreLabel}>{getScoreFeedback(score)}</h3>
              <p style={styles.scoreSubtitle}>Overall Resume Score</p>
            </div>
            
            <div style={styles.feedbackGrid}>
              {feedback.map((item, index) => (
                <div 
                  key={index} 
                  style={styles.feedbackCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.feedbackCardHover.transform;
                    e.currentTarget.style.boxShadow = styles.feedbackCardHover.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = styles.feedbackCard.boxShadow;
                  }}
                >
                  <div style={styles.feedbackIcon}>
                    {index % 3 === 0 ? '💡' : index % 3 === 1 ? '⚡' : '🎯'}
                  </div>
                  <p style={{ 
                    margin: '0', 
                    lineHeight: '1.6',
                    fontSize: '1.05rem',
                    color: '#333'
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '2px solid #e9ecef'
            }}>
              <button style={{
                padding: '12px 25px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                📝 Improve Resume
              </button>
              <button style={{
                padding: '12px 25px',
                backgroundColor: 'transparent',
                color: '#2196f3',
                border: '2px solid #2196f3',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                📥 Export Report
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add some CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes grow {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          @keyframes loading {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ResumeGrader;