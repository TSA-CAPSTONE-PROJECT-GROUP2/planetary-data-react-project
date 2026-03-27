export default function PlanetaryFactsTable() {
  return (
    <section id="facts" className="facts-table">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="section-title">Planetary Facts at a Glance</h2>
          <p className="section-subtitle">
            Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.
          </p>
        </div>

        <p className="table-caption">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </p>

        <div className="table-wrapper">
          <table className="planetary-table">
            <thead>
              <tr>
                <th colSpan="2">Type</th>
                <th>Name</th>
                <th>Mass (10<sup>24</sup>kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m<sup>3</sup>)</th>
                <th>Gravity (m/s<sup>2</sup>)</th>
              </tr>
            </thead>
            <tbody>
              {/* Terrestrial Planets */}
              <tr>
                <td rowSpan="4" colSpan="2" className="group">Terrestrial Planets</td>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>4.87</td>
                <td>12,104</td>
                <td>5243</td>
                <td>8.9</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>5.97</td>
                <td>12,756</td>
                <td>5514</td>
                <td>9.8</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.642</td>
                <td>6,792</td>
                <td>3933</td>
                <td>3.7</td>
              </tr>

              {/* Gas Giants */}
              <tr>
                <td rowSpan="4" className="group">Jovian Planets</td>
                <td rowSpan="2" className="subgroup">Gas Giants</td>
                <td>Jupiter</td>
                <td>1898</td>
                <td>142,984</td>
                <td>1326</td>
                <td>23.1</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>568</td>
                <td>120,536</td>
                <td>687</td>
                <td>9.0</td>
              </tr>

              {/* Ice Giants */}
              <tr>
                <td rowSpan="2" className="subgroup">Ice Giants</td>
                <td>Uranus</td>
                <td>86.8</td>
                <td>51,118</td>
                <td>1271</td>
                <td>8.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>102</td>
                <td>49,528</td>
                <td>1638</td>
                <td>11.0</td>
              </tr>

              {/* Dwarf Planets */}
              <tr>
                <td colSpan="2" className="group">Dwarf Planets</td>
                <td>Pluto</td>
                <td>0.0130</td>
                <td>2,376</td>
                <td>1850</td>
                <td>0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
