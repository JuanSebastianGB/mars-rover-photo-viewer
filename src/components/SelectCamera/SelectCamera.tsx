import React from 'react';
import { cameras } from '../../constants';
import { useSelectValue } from '../../pages/context';
import styles from './SelectCamera.module.css';

export type SelectCameraProps = {};

const SelectCamera: React.FC<SelectCameraProps> = ({}) => {
  const { changeSelectValue } = useSelectValue();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeSelectValue(event.target.value);
  };
  return (
    <div className={styles.selectcamera}>
      <h3>Select camera</h3>
      <select onChange={handleChange}>
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
