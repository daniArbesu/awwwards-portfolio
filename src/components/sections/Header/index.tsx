'use client';
import { AnimatePresence } from 'framer-motion';
import HamburgerMenu from '../../HamburgerMenu';
import styles from './style.module.css';
import NavBar from '../../Navbar';
import { useState } from 'react';
import Nav from '@/components/ui/Nav';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Nav />
      </header>
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      <AnimatePresence>{isActive && <NavBar />}</AnimatePresence>
    </>
  );
};

export default Header;
