// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';

import ResumeBuilder from './components/resume/ResumeBuilder';
import ResumeGrader from './components/resume/ResumeGrader';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
           
            
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/grader" element={<ResumeGrader />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;