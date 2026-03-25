import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../features/landing/components/Hero';
import VideoSection from '../features/landing/components/VideoSection';
import PlanetGrid from '../features/planets/components/PlanetGrid';
import PlanetaryFactsTable from '../features/planets/components/PlanetaryFactsTable';
import ContactForm from '../features/contact/components/ContactForm';

export default function HomeRoute() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <PlanetGrid />
        <PlanetaryFactsTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
