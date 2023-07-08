import { useEffect, useState } from 'react';
import { PhotoModel, RoverNameType } from '../models';
import { getRoverPhotos } from '../services';

export const useRovers = (
  rover: RoverNameType,
  earthDate: string,
  sol: number,
  applySol: boolean,
  selectValue: string,
  page: number
) => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getRoverPhotos({ rover, earthDate, sol, applySol, selectValue, page })
      .then((data) => {
        setHasNextPage(!!data.photos.length);
        setPhotos(data.photos);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(null), 2000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [rover, earthDate, sol, applySol, selectValue]);

  useEffect(() => {
    if (page === 1) return;
    setLoading(true);
    setError(null);
    getRoverPhotos({ rover, earthDate, sol, applySol, selectValue, page })
      .then((data) => {
        setHasNextPage(!!data.photos.length);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(null), 2000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return { photos, loading, error, hasNextPage };
};
