import PlanetCard from './PlanetCard';

export default function PlanetGrid() {
  return (
    <section id="explore" className="planet-grid">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>Each planet in our solar system has unique physical characteristics...</p>
      <div className="grid">
        {/* We will map over fetched data here array.map(planet => <PlanetCard key={planet.name} planet={planet} />) */}
      </div>
    </section>
  );
}
