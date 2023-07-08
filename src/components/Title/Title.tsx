import React from 'react';
import styles from './Title.module.css';

export type TitleProps = {
  children: React.ReactNode;
};

const TItle: React.FC<TitleProps> = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

export default TItle;
