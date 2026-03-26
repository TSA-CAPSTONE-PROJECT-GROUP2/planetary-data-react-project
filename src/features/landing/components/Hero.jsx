import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleScroll = () => {
    // This targets the next section in the Solar System Data Explorer
    const targetSection = document.getElementById('planet-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-container">
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        aria-hidden="true"
      >
        <source src="/space-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the cosmos for better overview of outer space. 
          From distance and speed to gravity and density, this page gives 
          you an extensive solar system database.
        </p>
        <button 
          className="cta-button" 
          onClick={handleScroll}
          aria-label="Scroll to planetary data"
        >
          Explore the Data
        </button>
      </div>
    </section>
  );
}
