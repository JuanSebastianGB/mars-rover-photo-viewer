import React from 'react';
import { setLocalStorage } from '../../helpers/localStorage';
import { useStore } from '../../hooks';
import { PhotoModel } from '../../models';
import styles from './ButtonDeleteFavorite.module.css';

export type ButtonDeleteFavoriteProps = {
  photo: PhotoModel;
};

const ButtonDeleteFavorite: React.FC<ButtonDeleteFavoriteProps> = ({
  photo,
}) => {
  const { removeFavorite, favorites } = useStore((state) => state);
  return (
    <div
      onClick={() => {
        removeFavorite(photo);
        setLocalStorage('favorites', favorites);
      }}
      className={styles.buttondeletefavorite}
    >
      DELETE FAVORITE
    </div>
  );
};

export default ButtonDeleteFavorite;
