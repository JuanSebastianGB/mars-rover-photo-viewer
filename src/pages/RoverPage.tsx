import { useParams } from 'react-router-dom';
import { getCurrentDate } from '../helpers';
import { useRovers } from '../hooks';
import { RoverNameType } from '../models';

function RoverPage() {
  const { name } = useParams<{ name: RoverNameType }>();
  const currentDate = getCurrentDate();
  if (!name) return null;
  const { photos, loading, error } = useRovers(name, currentDate);

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>Rovers {name} page</h2>
      {photos
        ? photos?.map((photo) => (
            <div key={photo.id}>
              <img src={photo.img_src} alt={photo.img_src} />
              <p>{photo.earth_date}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default RoverPage;
