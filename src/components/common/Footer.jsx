import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "40px 20px",
    borderTop: "4px solid #3498db",
    fontFamily: "'Poppins', sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  };

  const sectionTitle = {
    marginBottom: "15px",
    fontSize: "16px",
    color: "#4f7efc",
  };

  const linkStyle = {
    display: "block",
    color: "#ecf0f1",
    textDecoration: "none",
    margin: "5px 0",
    transition: "color 0.2s",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "15px",
    fontSize: "18px",
  };

  const companyStyle = {
    flex: 1,
    minWidth: "200px",
  };

  const linksStyle = {
    flex: 1,
    minWidth: "120px",
  };

  const socialStyle = {
    flex: 1,
    minWidth: "150px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Company Info */}
        <div style={companyStyle}>
          <h2 style={{ color: "#4f7efc", marginBottom: "10px" }}>Resume AI</h2>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Build Professional Resumes Easily & Impress Employers
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            &copy; {currentYear} Resume AI. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div style={linksStyle}>
          <h4 style={sectionTitle}>Quick Links</h4>
          <a href="/privacy" style={linkStyle}>Privacy</a>
          <a href="/terms" style={linkStyle}>Terms</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </div>

        {/* Social Media */}
        <div style={socialStyle}>
          <h4 style={sectionTitle}>Follow Us</h4>
          <div style={socialIconsStyle}>
            <a href="#" style={{ color: "#ecf0f1" }}><FaFacebookF /></a>
            <a href="#" style={{ color: "#ecf0f1" }}><FaTwitter /></a>
            <a href="#" style={{ color: "#ecf0f1" }}><FaLinkedinIn /></a>
            <a href="#" style={{ color: "#ecf0f1" }}><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
