import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="stars"></div>

      <img
        src="https://science.nasa.gov/wp-content/uploads/2023/04/earth-blue-marble.jpg"
        alt="Earth"
        className="planet-img"
      />

      <h1>Explore Our Solar System Through Data</h1>

      <p>
        Understand the planets not just by name, but by measurable features.
        Explore size, mass, gravity, and more in a simple, data-driven way.
      </p>

      <div className="buttons">
        <a href="#explore" className="primary">Explore the Data</a>
        <a href="#contact" className="secondary">Contact Us</a>
      </div>
    </section>
  );
          }
