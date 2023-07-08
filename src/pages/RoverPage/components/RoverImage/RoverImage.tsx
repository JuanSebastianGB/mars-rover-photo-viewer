import { forwardRef } from 'react';
import { ButtonAddFavorite } from '../../../../components/ButtonAddFavorite';
import { ButtonDeleteFavorite } from '../../../../components/ButtonDeleteFavorite';
import { useStore } from '../../../../hooks';
import { PhotoModel } from '../../../../models';
import styles from './RoverImage.module.css';

interface RoverImageProps {
  photo: PhotoModel;
}

const RoverImage: React.FC<RoverImageProps> = forwardRef(({ photo }, ref) => {
  const favorites = useStore((state) => state.favorites);
  const inFavorite = favorites.some((item) => item.id === photo.id);

  const content = ref ? (
    //@ts-ignore
    <div ref={ref} className={styles.card}>
      <img src={photo.img_src} alt={`${photo.id}`} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{photo.rover.name}</h2>
        <p className={styles.subtitle}>{photo.earth_date}</p>
        <p className={styles.subtitle}>{photo.camera.full_name}</p>
        {!inFavorite ? (
          <ButtonAddFavorite photo={photo} />
        ) : (
          <ButtonDeleteFavorite photo={photo} />
        )}
      </div>
    </div>
  ) : (
    <div className={styles.card}>
      <img src={photo.img_src} alt={`${photo.id}`} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{photo.rover.name}</h2>
        <p className={styles.subtitle}>{photo.earth_date}</p>
        <p className={styles.subtitle}>{photo.camera.full_name}</p>
        {!inFavorite ? (
          <ButtonAddFavorite photo={photo} />
        ) : (
          <ButtonDeleteFavorite photo={photo} />
        )}
      </div>
    </div>
  );

  return content;
});

export default RoverImage;
