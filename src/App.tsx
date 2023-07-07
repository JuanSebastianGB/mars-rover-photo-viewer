import { Fragment } from 'react';
import './App.css';
import { getCurrentDate } from './helpers';
import { useRovers } from './hooks';

function App() {
  const { photos, loading, error } = useRovers();

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  if (photos.length === 0) return <div>No photos found</div>;

  return (
    <Fragment>
      <h1>Mars Rover App</h1>
      Current Data {getCurrentDate()}
      {photos?.map((photo) => (
        <div key={photo.id}>
          <img src={photo.img_src} alt={photo.img_src} />
          <p>{photo.earth_date}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default App;
