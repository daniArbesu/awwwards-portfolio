import { sliderProjects } from '@/constants/cmsInfo';
import styles from './style.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SliderSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const overlayHeight = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section ref={sectionRef} className={styles.sliderSection}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {sliderProjects.slice(0, 4).map(({ color, src }, index) => (
          <div className={styles.project} key={index} style={{ backgroundColor: color }}>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={'image'} src={`/images/${src}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {sliderProjects.slice(4).map(({ color, src }, index) => (
          <div className={styles.project} key={index} style={{ backgroundColor: color }}>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={'image'} src={`/images/${src}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ height: overlayHeight }} className={styles.overlayContainer}>
        <div className={styles.overlay}></div>
      </motion.div>
    </section>
  );
};

export default SliderSection;
