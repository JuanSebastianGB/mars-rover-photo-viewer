import { useParams } from 'react-router-dom';
import { useRovers } from '../hooks';
import useStore from '../hooks/useStore';
import { RoverNameType } from '../models';

function RoverPage() {
  const { name } = useParams<{ name: RoverNameType }>();
  if (!name) return null;
  const {
    search: { earthDate, sol, applySol },
  } = useStore((state) => state);
  const { photos, loading, error } = useRovers(name, earthDate, sol, applySol);

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>Rovers {name} page</h2>
      {photos
        ? photos?.slice(0, 3)?.map((photo) => (
            <div key={photo.id}>
              <img src={photo.img_src} alt={photo.img_src} />
              <p>{photo.earth_date}</p>
              <div>
                sol:
                {photo.sol}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default RoverPage;
