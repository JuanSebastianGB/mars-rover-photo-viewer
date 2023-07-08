import React from 'react';
import { GridContainer, Title } from '../../../components';
import { useStore } from '../../../hooks';
import { RoverCard } from '../RoverCard';
import styles from './FavoritesPage.module.css';

export type FavoritesPageProps = {};

const FavoritesPage: React.FC<FavoritesPageProps> = ({}) => {
  const { favorites } = useStore();
  return (
    <div className={styles.favoritespage}>
      <Title>Favorites</Title>
      <GridContainer>
        {favorites?.map((photo) => <RoverCard photo={photo} key={photo.id} />)}
      </GridContainer>
    </div>
  );
};

export default FavoritesPage;
