import React from 'react';
import { ButtonDeleteFavorite } from '../../../components';
import { PhotoModel } from '../../../models';
import styles from './RoverCard.module.css';

export type RoverCardProps = {
  photo: PhotoModel;
};

const RoverCard: React.FC<RoverCardProps> = ({ photo }) => {
  const content = (
    <div className={styles.card}>
      <img src={photo.img_src} alt={`${photo.id}`} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{photo.rover.name}</h2>
        <p className={styles.subtitle}>{photo.earth_date}</p>
        <p className={styles.subtitle}>{photo.camera.full_name}</p>

        <ButtonDeleteFavorite photo={photo} />
      </div>
    </div>
  );

  return content;
};

export default RoverCard;
