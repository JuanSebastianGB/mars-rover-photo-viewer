import { Suspense, lazy } from 'react';
import './App.css';
import { SearchByEarthDate } from './components/SearchByEarthDate';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { menuLinks } from './models';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoverPage = lazy(() => import('./pages/RoverPage'));

function App() {
  return (
    <Suspense fallback={<> Loading...</>}>
      <Router>
        <SearchByEarthDate />
        <Navbar
          links={[
            { link: menuLinks.HOME, text: 'Home' },
            { link: menuLinks.CURIOSITY, text: 'Rovers - curiosity' },
            { link: menuLinks.OPPORTUNITY, text: 'Rovers - opportunity' },
            { link: menuLinks.SPIRIT, text: 'Rovers - spirit' },
          ]}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rovers/:name" element={<RoverPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
