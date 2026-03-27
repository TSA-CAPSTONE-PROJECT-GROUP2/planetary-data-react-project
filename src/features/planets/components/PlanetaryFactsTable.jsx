function PlanetaryFactsTable() {
  return( 
    <section class="facts-table">
      <h2>Planetary Facts at a Glance</h2>
      <p class="subtitle">
        Below is a comparative table of major planets in our solar system.
      </p>

      <table>
        <thead>
          <tr>
            <th colspan="2"></th>
            <th>Name</th>
            <th>Mass (10²⁴kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m³)</th>
            <th>Gravity (m/s²)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td rowspan="4" colspan="2" className="group">Terrestrial Planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td rowspan="4" className="group">Jovian Planets</td>
            <td rowspan="2" className="subgroup">Gas Giants</td>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td rowspan="2" className="subgroup">Ice Giants</td>
            <td>Uranus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td class=Name"group" colspan="2">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default PlanetaryFactsTable
