import React, { useState } from 'react';
import { getCurrentDate } from '../../helpers';
import useStore from '../../hooks/useStore';
import styles from './SearchByEarthDate.module.css';

export type SearchByEarthDateProps = {};

const SearchByEarthDate: React.FC<SearchByEarthDateProps> = () => {
  const { search, setSearch } = useStore((state) => state);
  const [inputDate, setInputDate] = useState(
    !!search.earthDate ? search.earthDate : getCurrentDate()
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputDate(e.target.value);
  return (
    <div className={styles.searchbyearthdate}>
      <input type="date" value={inputDate} onChange={handleChange} />
      <button onClick={() => setSearch({ earthDate: inputDate })}>
        Search
      </button>
    </div>
  );
};

export default SearchByEarthDate;
