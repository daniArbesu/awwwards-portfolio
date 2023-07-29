import { navLinks } from '@/constants/navLinks';
import styles from './style.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.slice(1).map(({ title, href }, index) => (
        <li className={styles.el} key={index}>
          <Link href={href}>{title}</Link>
          <div className={styles.indicator}></div>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
