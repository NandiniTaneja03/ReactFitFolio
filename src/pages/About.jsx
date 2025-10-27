import React from 'react';

const About = () => {
  const skills = ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'UI/UX Principles', 'API Integration'];

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="container">
          <h1>About ResumeAI</h1>
          <p>An innovative project developed by 2nd year FEE students to revolutionize resume analysis using AI technology</p>
        </div>
      </header>
      
      <main className="about-content">
        <div className="container">
          <section className="about-section">
            <h2>Our Project</h2>
            <p>ResumeAI is a cutting-edge web application designed to help job seekers improve their resumes through artificial intelligence.</p>
            
            <div className="project-info">
              <p><strong>This project was developed as part of our 2nd year Front-End Engineering (FEE) course.</strong></p>
            </div>
          </section>
          
          <section className="about-section">
            <h2>Educational Context</h2>
            <p>This project represents the culmination of our 2nd year studies in Front-End Engineering:</p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;