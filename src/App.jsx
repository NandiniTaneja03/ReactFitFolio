import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import ResumeBuilder from "./components/resume/ResumeBuilder";
import ResumeGrader from "./components/resume/ResumeGrader";
import ProtectedRoute from "./components/common/ProtectedRoute";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/features" element={<Features />} />

          <Route
            path="/builder"
            element={
              <ProtectedRoute>
                <ResumeBuilder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/grader"
            element={
              <ProtectedRoute>
                <ResumeGrader />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
