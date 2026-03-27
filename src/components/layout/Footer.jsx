import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Column 1: Brand & Logo */}
        <div className="footer-column footer-brand">
          <img src="/graphics.png" alt="Planetary Explorer Logo" className="footer-logo" />
          <p className="footer-description">
            Planetary science goes beyond images. It's about data, research, and 
            understanding our place in the universe. Explore the depths of our 
            solar system with us.
          </p>
        </div>
        
        {/* Column 2: Home Links */}
        <div className="footer-column">
          <h4 className="footer-title">Home</h4>
          <ul className="footer-links">
            <li><a href="#home">Hero Section</a></li>
            <li><a href="#video">Video Section</a></li>
            <li><a href="#explore">Planetary Data</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Column 3: Team Links */}
        <div className="footer-column team-column">
          <h4 className="footer-title">Our Team</h4>
          <ul className="footer-links team-list">
            <li>Christian: <a href="https://github.com/Chris-SecAdmin" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Joseph: <a href="https://github.com/Jossysilver" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Jeremiah: <a href="https://github.com/Honeybadger25main" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Shalom: <a href="https://github.com/Shalom4686" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        
        {/* Column 4: Team Links Part 2 */}
        <div className="footer-column team-column">
          <h4 className="footer-title">Team Continued</h4>
          <ul className="footer-links team-list">
            <li>Salvation: <a href="https://github.com/salvationihechukwu1-bit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Yasir: <a href="https://github.com/ayindelemoh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Rotimi: <a href="https://github.com/rotimi-Chris" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Chidera: <a href="https://github.com/Deramanuel" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>Daniel: <a href="https://github.com/DanielOgbuji" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        {/* Column 5: Resources */}
        <div className="footer-column">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">TS Academy</a></li>
            <li><a href="https://github.com/your-group" target="_blank" rel="noopener noreferrer">Group Repository</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Planetary Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
