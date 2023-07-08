import React from 'react';
import { setLocalStorage } from '../../helpers/localStorage';
import { useStore } from '../../hooks';
import { PhotoModel } from '../../models';
import styles from './ButtonAddFavorite.module.css';

export type ButtonAddFavoriteProps = {
  photo: PhotoModel;
};

const ButtonAddFavorite: React.FC<ButtonAddFavoriteProps> = ({ photo }) => {
  const { addFavorite, favorites } = useStore((state) => state);

  return (
    <button
      className={styles.buttonaddfavorite}
      onClick={() => {
        addFavorite(photo);
        setLocalStorage('favorites', favorites);
      }}
    >
      ADD FAVORITES
    </button>
  );
};

export default ButtonAddFavorite;
