import { useState } from 'react';
import './App.css';
import { SearchByEarthDate } from './components/SearchByEarthDate';
import { getCurrentDate } from './helpers';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { HomePage, RoverPage } from './pages';

function App() {
  const currentDate = getCurrentDate();
  const [earthDate, setEarthDate] = useState(currentDate);

  const changeDate = (date: string) => setEarthDate(date);

  return (
    <Router>
      <SearchByEarthDate earthDate={earthDate} changeDate={changeDate} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rovers/:name" element={<RoverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
