import React from 'react';
import styles from './FallbackLoader.module.css';

export type FallbackLoaderProps = {};

const FallbackLoader: React.FC<FallbackLoaderProps> = ({}) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default FallbackLoader;
