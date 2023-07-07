import { BASE_URL } from '../constants';
import { getCurrentDate } from '../helpers';
import { RoverNameType } from '../models';

interface Props {
  rover?: RoverNameType;
  earthDate?: string;
  sol?: number;
  applySol?: boolean;
}

/**
 * The function `getRoverPhotos` is an asynchronous function that fetches rover photos from an API
 * based on the provided rover, earth date, sol, and applySol parameters.
 * @param {Props}  - - `rover`: The name of the rover. The default value is 'curiosity'.
 * @returns the data fetched from the API.
 */
export const getRoverPhotos = async ({
  rover = 'curiosity',
  earthDate = getCurrentDate(),
  sol = 0,
  applySol = false,
}: Props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  if (!API_KEY) throw new Error('API key is missing or invalid');

  const URL =
    `${BASE_URL}${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}` +
    (applySol ? `&sol=${sol}` : '');

  const response = await fetch(URL);
  if (!response.ok) throw new Error('Failed to fetch data from the API');

  const data = await response.json();

  return data;
};
