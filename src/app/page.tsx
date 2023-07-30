'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { createLocomotive } from '@/services/locomotive';
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SliderSection from '@/components/sections/SliderSection';
import FooterSection from '@/components/sections/FooterSection';
import Preloader from '@/components/ui/Preloader';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const locomotiveScroll = createLocomotive();
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Scroll to start (in case page is reloaded)
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SliderSection />
      <FooterSection />
    </main>
  );
}
