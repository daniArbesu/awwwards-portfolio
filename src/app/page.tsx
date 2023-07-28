'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import { createLocomotive } from '@/services/locomotive';

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = createLocomotive();
  }, []);

  return <main className={styles.main}></main>;
}
