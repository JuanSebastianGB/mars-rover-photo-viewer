import styles from './HomePage.module.css';

interface FeatureProps {
  title: string;
  description: string;
}
export function Feature({ title, description }: FeatureProps) {
  return (
    <div className={styles.feature}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HomePage() {
  const featureList = [
    {
      title: 'NASA API Integration',
      description:
        "Connects to the NASA Open APIs to fetch photos from the 'Mars Rover' endpoint.",
    },
    {
      title: 'Rover Selection',
      description: 'Choose a specific rover to view corresponding photos.',
    },
    {
      title: 'Pagination',
      description:
        'Display photos in a paginated manner for smooth browsing experience.',
    },
    {
      title: 'Camera Filtering',
      description: 'Filter rover photos by the camera used to capture them.',
    },
    {
      title: 'Default Date',
      description: 'Display the latest photos available for the current day.',
    },
    {
      title: 'Search by Earth Day',
      description: "Search for photos based on a specific 'Earth Day' date.",
    },
    {
      title: 'Search by Sol Date',
      description: "Search for photos based on the 'Sol' date.",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Mars Rover Photo Viewer</h1>
      <p className={styles.description}>
        Explore the fascinating photos captured by the Mars Rovers: Curiosity,
        Opportunity, and Spirit.
      </p>
      <div className={styles.features}>
        {featureList.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
