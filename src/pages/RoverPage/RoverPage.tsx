import { useParams } from 'react-router-dom';
import { SelectCamera } from '../../components';
import { useRovers, useStore } from '../../hooks';
import { RoverNameType } from '../../models';
import { useSelectValue } from '../context';
import { RoverListImages } from './components';

function RoverPage() {
  const { name } = useParams<{ name: RoverNameType }>();
  if (!name) return null;
  const { selectValue } = useSelectValue();
  const {
    search: { earthDate, sol, applySol },
  } = useStore((state) => state);
  const { photos, loading, error } = useRovers(
    name,
    earthDate,
    sol,
    applySol,
    selectValue
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h2>Rovers {name} page</h2>
      <SelectCamera />
      <div>Selected value: {selectValue}</div>
      {loading ? <div>Loading...</div> : null}
      {!loading && photos ? <RoverListImages photos={photos} /> : null}
    </div>
  );
}

export default RoverPage;
