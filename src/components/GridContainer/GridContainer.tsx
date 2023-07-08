import React from 'react';
import styles from './GridContainer.module.css';

export type GridContainerProps = {
  children: React.ReactNode;
};

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return <div className={styles.gridcontainer}>{children}</div>;
};

export default GridContainer;
