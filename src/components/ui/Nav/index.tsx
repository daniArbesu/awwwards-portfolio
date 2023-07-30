import { navLinks } from '@/constants/cmsInfo';
import styles from './style.module.css';
import Link from 'next/link';
import MagneticEffect from '../MagneticEffect';

const Nav = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.slice(1).map(({ title, href }, index) => (
        <MagneticEffect key={index}>
          <li className={styles.el}>
            <Link href={href}>{title}</Link>
            <div className={styles.indicator}></div>
          </li>
        </MagneticEffect>
      ))}
    </ul>
  );
};

export default Nav;
