import { BASE_URL } from '../constants';
import { getCurrentDate } from '../helpers';
import { RoverNameType } from '../models';

interface Props {
  rover?: RoverNameType;
  earthDate?: string;
}

/**
 * The function `getRoverPhotos` is an asynchronous function that fetches rover photos from an API
 * based on the rover name and earth date provided.
 * @param {Props}  - - `rover`: The name of the rover. The default value is set to `'curiosity'`.
 * @returns the data fetched from the API.
 */
export const getRoverPhotos = async ({
  rover = 'curiosity',
  earthDate = getCurrentDate(),
}: Props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `${BASE_URL}${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}`;
  const response = await fetch(URL);
  if (!response.ok) throw new Error('Failed to fetch data from the API');

  const data = await response.json();

  return data;
};
