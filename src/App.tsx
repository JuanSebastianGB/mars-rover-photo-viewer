import { Suspense, lazy } from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FallbackLoader, Navbar, SearchByFilter } from './components';
import { menuLinks } from './models';
import { SelectValueProvider } from './pages/context';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoverPage = lazy(() => import('./pages/RoverPage/RoverPage'));

function App() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <SelectValueProvider>
        <Router>
          <Navbar
            links={[
              { link: menuLinks.HOME, text: 'Home' },
              { link: menuLinks.CURIOSITY, text: 'Rovers - curiosity' },
              { link: menuLinks.OPPORTUNITY, text: 'Rovers - opportunity' },
              { link: menuLinks.SPIRIT, text: 'Rovers - spirit' },
            ]}
          />
          <h1 className="main-title">Mars Rover Photo Viewer</h1>
          <SearchByFilter />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rovers/:name" element={<RoverPage />} />
          </Routes>
        </Router>
      </SelectValueProvider>
    </Suspense>
  );
}

export default App;
