import Link from 'next/link';
import styles from './style.module.css';
import MagneticEffect from '../MagneticEffect';

const Logo = () => {
  return (
    <MagneticEffect>
      <Link href="/" className={styles.logoWrapper}>
        <span className={styles.copyright}>©</span>
        <div className={styles.logo}>
          <span className={styles.codeBy}>Code by</span>
          <span className={styles.name}>Daniel</span>
          <span className={styles.surname}>Arbesú</span>
        </div>
      </Link>
    </MagneticEffect>
  );
};

export default Logo;
