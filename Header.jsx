import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🪐 Planet</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#explore">Explore</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
