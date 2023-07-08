import { Suspense, lazy } from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, SearchByFilter } from './components';
import { menuLinks } from './models';
import { SelectValueProvider } from './pages/context';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoverPage = lazy(() => import('./pages/RoverPage/RoverPage'));

function App() {
  return (
    <Suspense fallback={<> Loading...</>}>
      <Router>
        <SelectValueProvider>
          <SearchByFilter />
        </SelectValueProvider>
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
          <Route
            path="/rovers/:name"
            element={
              <SelectValueProvider>
                <RoverPage />
              </SelectValueProvider>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
