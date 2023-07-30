import Image from 'next/image';
import styles from './style.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FooterArrow } from '@/components/ui/icons/Index';

const FooterSection = () => {
  const [time, setTime] = useState('');

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotateArrow = useTransform(scrollYProgress, [0, 1], [120, 90]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentTime =
        date.toLocaleString('es-es', { hour: '2-digit', minute: '2-digit' }) + ' CEST';
      setTime(currentTime);
    }, 1000);
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return (
    <motion.section style={{ y }} ref={sectionRef} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt="image" src={`/images/hero-background.avif`} />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <a href="/contact" className={styles.button}>
              Get in touch
            </a>
          </motion.div>
          <FooterArrow rotate={rotateArrow} />
        </div>
        <div className={styles.nav}>
          <a href="#">info@dennissnellenberg.com</a>
          <a href="#">+31 6 27 84 74 30</a>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Local Time</h3>
              <p>{time}</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <a>
                <p>Awwwards</p>
              </a>
            </span>
            <a>
              <p>Instagram</p>
            </a>
            <a>
              <p>Dribbble</p>
            </a>
            <a>
              <p>Linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FooterSection;
