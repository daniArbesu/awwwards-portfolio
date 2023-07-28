'use client';
import { AnimatePresence } from 'framer-motion';
import HamburgerMenu from '../../HamburgerMenu';
import styles from './style.module.css';
import NavBar from '../../Navbar';
import { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Dennis</p>
            <p className={styles.snellenberg}>Snellenberg</p>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.el}>
            <a>Work</a>
            <div className={styles.indicator}></div>
          </div>

          <div className={styles.el}>
            <a>About</a>
            <div className={styles.indicator}></div>
          </div>

          <div className={styles.el}>
            <a>Contact</a>
            <div className={styles.indicator}></div>
          </div>
        </div>
      </div>
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      <AnimatePresence>{isActive && <NavBar />}</AnimatePresence>
    </>
  );
};

export default Header;
