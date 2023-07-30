import { useEffect, useState } from 'react';
import { opacity, slideUp } from './animation';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { preloaderWords } from '@/constants/cmsInfo';

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === preloaderWords.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      <motion.p variants={opacity} initial="initial" animate="animate">
        {preloaderWords[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
