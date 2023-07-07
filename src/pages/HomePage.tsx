import useStore from '../hooks/useStore';

function HomePage() {
  const {
    search: { earthDate },
  } = useStore((state) => state);

  return <div>Home page {earthDate}</div>;
}

export default HomePage;
