import { BASE_URL } from '../constants';
import { getCurrentDate } from '../helpers';

interface Props {
  rover?: 'curiosity' | 'opportunity' | 'spirit';
  earth_date?: string;
}

/**
 * The function `getRoverPhotos` is an asynchronous function that retrieves rover photos based on the
 * rover name and earth date, using an API key and URL.
 * @param {Props}  - - `rover`: The name of the rover for which you want to retrieve photos.
 * @returns the data fetched from the API.
 */
export const getRoverPhotos = async ({
  rover = 'curiosity',
  earth_date = getCurrentDate(),
}: Props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `${BASE_URL}${rover}/photos?earth_date=${earth_date}&api_key=${API_KEY}`;
  const response = await fetch(URL);
  if (!response.ok) throw new Error('Failed to fetch data from the API');

  const data = await response.json();

  return data;
};
