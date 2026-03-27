import React from "react";

export default function VideoSection() {
  return (
    <section id="video-section" className="video-section">
      <div className="container video-grid">
        <div className="video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="promo-video"
          >
            <source src="/space-bg.mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-content">
          <h2 className="section-title">How Planetary Data Helps Us Understand Space</h2>
          <p className="section-subtitle">
            Planetary science goes beyond images. Comparing <span className="highlight-blue">mass</span>,{" "} 
            <span className="highlight-blue">diameter</span>, <span className="highlight-blue">gravity</span>,{" "} 
            and <span className="highlight-blue">density</span>, we gain insight into how 
            planets form, survive, and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}