import React, { useId, useState } from 'react';
import { getCurrentDate } from '../../helpers';
import { setLocalStorage } from '../../helpers/localStorage';
import useStore from '../../hooks/useStore';
import styles from './SearchByFilter.module.css';

export type SearchByFilter = {};

const SearchByFilter: React.FC<SearchByFilter> = () => {
  const earthId = useId();
  const solId = useId();
  const { search, setSearch } = useStore((state) => state);
  const [inputDate, setInputDate] = useState(
    !!search.earthDate ? search.earthDate : getCurrentDate()
  );
  const [inputSol, setInputSol] = useState(search.sol);
  const [applySol, setApplySol] = useState(search.applySol);

  const handleEarthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
    setLocalStorage('earthDate', e.target.value);
  };
  const handleSolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSol(+e.target.value);
    setLocalStorage('sol', e.target.value);
  };
  return (
    <div className={styles.searchbyearthdate}>
      <div>
        <label htmlFor={earthId}>Earth Date</label>
        <input
          id={earthId}
          type="date"
          value={inputDate}
          onChange={handleEarthDateChange}
        />
      </div>
      <div>
        <label htmlFor={solId}>Sol number</label>
        <input
          id={solId}
          type="number"
          value={inputSol}
          onChange={handleSolChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={() => {
            setApplySol((state) => !state);
            setLocalStorage('applySol', applySol);
          }}
          checked={applySol}
        />
        implement sol search
      </div>
      <button
        onClick={() =>
          setSearch({ earthDate: inputDate, sol: inputSol, applySol })
        }
      >
        Search
      </button>
    </div>
  );
};

export default SearchByFilter;
