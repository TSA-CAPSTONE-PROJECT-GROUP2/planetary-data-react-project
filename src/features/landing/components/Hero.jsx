import React from "react";

export default function Hero() {
  const handleScroll = () => {
    // This targets the next section in the Solar System Data Explorer
    const targetSection = document.getElementById('planet-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">Explore Our Solar System Through Data</h1>
          <p className="hero-subtitle">
            Understand the cosmos for better overview of out space. From distance, 
            speed, to gravity and density, this page gives you an extensive solar 
            system database.
          </p>
          <div className="hero-actions">
            <a href="#explore" className="btn-primary">Explore the Data</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <img 
            src="/075cfe8711f093d2ee4330cfa37d385003066f0a.png" 
            alt="Planetary Globe" 
            className="hero-globe"
          />
        </div>
      </div>
    </section>
  );
}
