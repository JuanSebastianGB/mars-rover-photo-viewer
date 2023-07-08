import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { SelectCamera, Title } from '../../components';
import { useRovers, useStore } from '../../hooks';
import { RoverNameType } from '../../models';
import { useSelectValue } from '../context';
import { RoverListImages } from './components';

function RoverPage() {
  const { name } = useParams<{ name: RoverNameType }>();
  if (!name) return null;
  const { selectValue, page } = useSelectValue();
  const {
    search: { earthDate, sol, applySol },
    favorites,
  } = useStore((state) => state);
  const { photos, loading, error, hasNextPage } = useRovers(
    name,
    earthDate,
    sol,
    applySol,
    selectValue,
    page
  );

  if (error) return <h1>{error}</h1>;

  return (
    <Fragment>
      <Title>Rover {name}</Title>
      <h2>Rovers {name}</h2>
      <h2>Page {page} </h2>
      <SelectCamera />
      <div>Selected value: {selectValue}</div>
      <div>Qty {photos?.length}</div>
      <div>Favorites:{JSON.stringify(favorites, null, 2)} </div>
      {
        <RoverListImages
          photos={photos}
          loading={loading}
          hasNextPage={hasNextPage}
        />
      }
    </Fragment>
  );
}

export default RoverPage;
