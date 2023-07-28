'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import { createLocomotive } from '@/services/locomotive';
import HeroSection from '@/components/sections/Hero';

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const locomotiveScroll = createLocomotive();
  }, []);

  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
