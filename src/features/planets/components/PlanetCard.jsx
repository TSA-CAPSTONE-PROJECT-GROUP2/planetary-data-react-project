import { useState, useEffect } from "react";

export default function PlanetCard({ name, distance, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Swap the image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  const displayImage = images && images.length > 0 ? images[currentImageIndex] : "";

  return (
    <figure className="planet-card">
      {displayImage && <img src={displayImage} alt={`Planet ${name}`} loading="lazy" />}
      <figcaption>
        <h3>{name}</h3>
        <p>{distance} million km</p>
      </figcaption>
    </figure>
  );
}
