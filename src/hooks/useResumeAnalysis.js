import { useState } from 'react';

export const useResumeAnalysis = () => {
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async (file) => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Random score between 60-100 (same as original logic)
    const randomScore = Math.floor(Math.random() * 41) + 60;
    
    // Random feedback selection
    const feedbackList = [
      "Good headings and formatting.",
      "Add more relevant skills.",
      "Highlight measurable achievements.",
      "Use industry keywords.",
      "Keep it concise and focused.",
      "Make contact info visible."
    ];
    const shuffled = feedbackList.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    setScore(randomScore);
    setFeedback(shuffled);
    setLoading(false);
  };

  return {
    analyzeResume,
    score,
    feedback,
    loading
  };
};