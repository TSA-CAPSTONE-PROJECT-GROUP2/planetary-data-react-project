export default function VideoSection() {
  return (
    <section className="video-section">
      <h2>How Planetary Data Helps Us Understand Space</h2>
      <p>Planetary science goes beyond images. Comparing mass, distance, gravity, and density, we gain insight into how planets form, survive, and interact within the solar system.</p>
      {/* HTML5 video element (muted, autoPlay, loop) no iframe allowed per requirements */}
      <video width="100%" autoPlay muted loop>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
