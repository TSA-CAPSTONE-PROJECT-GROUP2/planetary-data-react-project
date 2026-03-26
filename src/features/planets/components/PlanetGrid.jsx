import { planets } from "./planets"
import PlanetCard from "./PlanetCard";

function PlanetGrid() {
  return(
    <section className="container">

      {planets.map((planet, index) => (
        <PlanetCard 
          key={index}
          name={planet.name}
          distance={planet.distance}
          images={planet.images}
        />
      ))} 
    </section>
  )
}

export default PlanetGrid