import { aboutText } from '@/constants/aboutText';
import styles from './style.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './animation';
import Link from 'next/link';

const AboutSection = () => {
  const aboutSectionRef = useRef(null);
  const isInView = useInView(aboutSectionRef);

  return (
    <section ref={aboutSectionRef} className={styles.about}>
      <div className={styles.container}>
        <p>
          {aboutText[0].split(' ').map((word, index) => (
            <span className={styles.mask} key={index}>
              <motion.span variants={slideUp} custom={index} animate={isInView ? 'open' : 'closed'}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          {aboutText[1]}
        </motion.p>
      </div>
      <div data-scroll data-scroll-speed="0.05">
        <Link href="/about" className={styles.button}>
          About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
