import styles from './style.module.css';
import { motion } from 'framer-motion';
import { pathAnimation } from './animation';

const SVGMask = () => {
  return (
    <svg className={styles.curve}>
      <motion.path variants={pathAnimation} initial="initial" animate="animate" exit="exit" />
    </svg>
  );
};

export default SVGMask;
