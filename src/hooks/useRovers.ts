import { useEffect, useState } from 'react';
import { PhotoModel, RoverNameType } from '../models';
import { getRoverPhotos } from '../services';

export const useRovers = (
  rover: RoverNameType,
  earthDate: string,
  sol: number,
  applySol: boolean
) => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getRoverPhotos({ rover, earthDate, sol, applySol })
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(null), 2000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [rover, earthDate, sol, applySol]);

  return { photos, loading, error };
};
