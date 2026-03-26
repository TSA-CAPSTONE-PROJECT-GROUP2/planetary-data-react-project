function PlanetCard({name, distance, images}) {
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }

  const randomImage = getRandomImage()

  return(
    <section className="container">
      <div className="card">
        <img src={randomImage} alt={name} />

        <h3>{name}</h3>
        <p>Distance from sun: {distance}</p>
      </div>      
    </section>
  )
}
export default PlanetCard
