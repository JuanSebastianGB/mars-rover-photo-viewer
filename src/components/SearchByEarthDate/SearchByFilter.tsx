import React, { useId, useState } from 'react';
import { getCurrentDate } from '../../helpers';
import { setLocalStorage } from '../../helpers/localStorage';
import useStore from '../../hooks/useStore';
import { useSelectValue } from '../../pages/context';
import styles from './SearchByFilter.module.css';

export type SearchByFilter = {};

const SearchByFilter: React.FC<SearchByFilter> = () => {
  const earthId = useId();
  const solId = useId();
  const { search, setSearch, changeApplySol } = useStore((state) => state);
  const [inputDate, setInputDate] = useState(
    !!search.earthDate ? search.earthDate : getCurrentDate()
  );
  const [inputSol, setInputSol] = useState(search.sol);
  const { resetPage } = useSelectValue();

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
            changeApplySol();
            setLocalStorage('applySol', search.applySol);
          }}
          checked={search.applySol}
        />
        implement sol search
      </div>
      <button
        onClick={() => {
          setSearch({
            earthDate: inputDate,
            sol: inputSol,
            applySol: search.applySol,
          });
          resetPage();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchByFilter;
