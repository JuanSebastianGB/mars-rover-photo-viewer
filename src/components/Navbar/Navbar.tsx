import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface LinkModel {
  link: string;
  text: string;
}
export type NavbarProps = {
  links: LinkModel[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          {links.map((element) => (
            <li key={element.text}>
              <Link to={element.link}>{element.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
