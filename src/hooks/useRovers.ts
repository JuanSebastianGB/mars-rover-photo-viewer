import { useEffect, useState } from 'react';
import { PhotoModel } from '../models';
import { getRoverPhotos } from '../services';

export const useRovers = () => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getRoverPhotos({})
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
  }, []);

  return { photos, loading, error };
};
