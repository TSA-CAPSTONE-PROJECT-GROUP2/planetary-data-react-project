import HomeRoute from './routes/HomeRoute';
import './index.css';
import PlanetaryFactsTable from './features/planets/components/PlanetaryFactsTable';

function App() {
  return (
    <div className="app-container">
      <PlanetaryFactsTable />
      <HomeRoute />
    </div>
  );
}

export default App;
