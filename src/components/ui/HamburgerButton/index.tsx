import styles from './style.module.css';

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const HamburgerButton: React.FC<Props> = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={`${styles.hamburger} ${isActive ? styles.hamburgerActive : ''}`}></div>
      </button>
    </div>
  );
};

export default HamburgerButton;
