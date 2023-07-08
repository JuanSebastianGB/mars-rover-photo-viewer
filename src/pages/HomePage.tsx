import { useStore } from '../hooks';

function HomePage() {
  const {
    search: { earthDate, sol, applySol },
    favorites,
  } = useStore((state) => state);

  return (
    <div>
      Home page
      <hr />
      <div>Date {earthDate} </div>
      <div> Sol: {sol}</div>
      <div> apply: {JSON.stringify(applySol)}</div>
      <div>Favorites: {JSON.stringify(favorites)}</div>
    </div>
  );
}

export default HomePage;
