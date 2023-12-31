import React from 'react';
import { cameras } from '../../constants';
import { useSelectValue } from '../../pages/context';
import styles from './SelectCamera.module.css';

export type SelectCameraProps = {};

const SelectCamera: React.FC<SelectCameraProps> = ({}) => {
  const { changeSelectValue, resetPage } = useSelectValue();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeSelectValue(event.target.value);
    resetPage();
  };
  return (
    <div className={styles.selectCamera}>
      <h3 className={styles.title}>Select camera</h3>
      <select className={styles.select} onChange={handleChange}>
        <option value="">-----</option>
        {cameras.map((camera) => (
          <option key={camera} value={camera}>
            {camera}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCamera;
