import { Suspense, lazy, useState } from 'react';
import './App.css';
import { SearchByEarthDate } from './components/SearchByEarthDate';
import { getCurrentDate } from './helpers';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoverPage = lazy(() => import('./pages/RoverPage'));

function App() {
  const currentDate = getCurrentDate();
  const [earthDate, setEarthDate] = useState(currentDate);

  const changeDate = (date: string) => setEarthDate(date);

  return (
    <Suspense fallback={<> Loading...</>}>
      <Router>
        <SearchByEarthDate earthDate={earthDate} changeDate={changeDate} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rovers/:name" element={<RoverPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
