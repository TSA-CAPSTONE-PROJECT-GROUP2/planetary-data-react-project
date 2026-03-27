import React from "react";
import "./VideoSection.css"; // Ensure this file is in the SAME folder

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-text-container">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{" "}
          <span className="bold-text">mass, distance, gravity</span>, and{" "}
          <span className="bold-text">density</span>, we gain insight into how 
          planets form, survive, and interact within the solar system.
        </p>
      </div>

      <div className="video-wrapper">
        <video 
          width="100%" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/globe.png" /* This uses the globe photo as the thumbnail */
        >
          <source src="/space-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}