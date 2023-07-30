import { slideUp } from './animation';
import styles from './style.module.css';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      <p>Loading...</p>
    </motion.div>
  );
};

export default Preloader;
