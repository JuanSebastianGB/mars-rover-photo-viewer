import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.css';

type NavbarItemProps = {
  link: string;
  text: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({ link, text }) => {
  return (
    <li className={styles.navbarItem}>
      <Link to={link} className={styles.navbarLink}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarItem;
