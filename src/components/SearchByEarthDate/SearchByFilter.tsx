import React, { Fragment, useId, useState } from 'react';
import { Title } from '..';
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
    <Fragment>
      <Title>Filter section</Title>
      <div className={styles.searchByFilter}>
        <div className={styles.inputContainer}>
          <label htmlFor={earthId} className={styles.label}>
            Earth Date
          </label>
          <input
            id={earthId}
            type="date"
            value={inputDate}
            onChange={handleEarthDateChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor={solId} className={styles.label}>
            Sol number
          </label>
          <input
            id={solId}
            type="number"
            value={inputSol}
            onChange={handleSolChange}
            className={styles.input}
          />
        </div>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            onChange={() => {
              changeApplySol();
              setLocalStorage('applySol', !search.applySol);
            }}
            checked={search.applySol}
            className={styles.checkbox}
            id="applySolCheckbox"
          />
          <label htmlFor="applySolCheckbox" className={styles.checkboxLabel}>
            Implement sol search
          </label>
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
          className={styles.button}
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default SearchByFilter;
