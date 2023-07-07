import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rovers/curiosity">Rovers - curiosity</Link>
          </li>
          <li>
            <Link to="/rovers/opportunity">Rovers - opportunity</Link>
          </li>
          <li>
            <Link to="/rovers/spirit">Rovers - spirit</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
