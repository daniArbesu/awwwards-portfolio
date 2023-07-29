import Link from 'next/link';
import styles from './style.module.css';

const Logo = () => {
  return (
    <Link href="/" className={styles.logoWrapper}>
      <p className={styles.copyright}>©</p>
      <div className={styles.logo}>
        <p className={styles.codeBy}>Code by</p>
        <p className={styles.name}>Daniel</p>
        <p className={styles.surname}>Arbesú</p>
      </div>
    </Link>
  );
};

export default Logo;
