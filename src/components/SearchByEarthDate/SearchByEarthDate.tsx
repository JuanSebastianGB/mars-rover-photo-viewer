import React, { useState } from 'react';
import { getCurrentDate } from '../../helpers';
import styles from './SearchByEarthDate.module.css';

export type SearchByEarthDateProps = {
  earthDate: string;
  changeDate: (date: string) => void;
};

const SearchByEarthDate: React.FC<SearchByEarthDateProps> = ({
  changeDate,
}) => {
  const [inputDate, setInputDate] = useState(getCurrentDate());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputDate(e.target.value);
  return (
    <div className={styles.searchbyearthdate}>
      <input type="date" value={inputDate} onChange={handleChange} />
      <button onClick={() => changeDate(inputDate)}>Search</button>
      ...
    </div>
  );
};

export default SearchByEarthDate;
