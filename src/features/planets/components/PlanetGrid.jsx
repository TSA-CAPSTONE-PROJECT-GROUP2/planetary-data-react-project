import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import { planets as localPlanetData } from "./planet.js";

export default function PlanetGrid() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch planet data");
        return res.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="explore" className="planet-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visualizing the Differences Between Planets</h2>
          <p className="section-subtitle">
            Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.
          </p>
        </div>
        
        {loading && <p style={{ textAlign: 'center' }}>Loading planet data...</p>}
        {error && <p style={{ textAlign: 'center', color: 'var(--color-error)' }}>{error}</p>}
        
        {!loading && !error && (
          <div className="planet-grid">
            {planets.map((planet) => {
              const localMatch = localPlanetData.find(
                (p) => p.name.toLowerCase() === planet.planet.toLowerCase()
              );
              const planetImages = localMatch ? localMatch.images : [];

              return (
                <PlanetCard 
                  key={planet.planet}
                  name={planet.planet}
                  distance={planet.distanceFromSun}
                  images={planetImages}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}