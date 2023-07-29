import Image from 'next/image';
import styles from './style.module.css';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import { HeroArrow } from '@/components/ui/icons/Index';

const HeroSection = () => {
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      ScrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e: ScrollTrigger) => (direction = e.direction * -1)
      },
      x: '-500px'
    });

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent });
    gsap.set(secondTextRef.current, { xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.section variants={slideUp} initial="initial" animate="animate" className={styles.hero}>
      <Image src={'/images/hero-background.avif'} alt="Hero Background Portrait" fill={true} />
      <div className={styles.sliderContainer}>
        <div ref={sliderRef} className={styles.slider}>
          <p ref={firstTextRef}>Freelance Developer -</p>
          <p ref={secondTextRef}>Freelance Developer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <HeroArrow />
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
