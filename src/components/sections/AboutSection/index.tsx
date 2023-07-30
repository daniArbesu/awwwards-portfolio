import { aboutText } from '@/constants/cmsInfo';
import styles from './style.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './animation';
import Link from 'next/link';
import CircleButton from '@/components/ui/CircleButton';

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
      <Link href="/about" data-scroll data-scroll-speed="0.05">
        <CircleButton className={styles.button}>
          <p>About Me</p>
        </CircleButton>
      </Link>
    </section>
  );
};

export default AboutSection;
