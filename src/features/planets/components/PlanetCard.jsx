export default function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      {/* Mock image until data is fetched */}
      <img src="placeholder.jpg" alt="Planet placeholder" />
      <figcaption>
        <h3>Planet Name</h3>
        <p>Distance from Sun</p>
      </figcaption>
    </figure>
  );
}
