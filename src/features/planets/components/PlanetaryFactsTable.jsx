export default function PlanetaryFactsTable() {
  return (
    <section className="facts-table-section">
      <h2>Planetary Facts at a Glance</h2>
      <p>Here's a summary of the major planets in our solar system...</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass (10^24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m^3)</th>
            <th>Gravity (m/s^2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          {/* other rows */}
        </tbody>
      </table>
    </section>
  );
}
