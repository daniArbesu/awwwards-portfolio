import styles from './style.module.css';

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const HamburgerMenu: React.FC<Props> = ({ isActive, setIsActive }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={`${styles.hamburger} ${isActive ? styles.hamburgerActive : ''}`}></div>
    </button>
  );
};

export default HamburgerMenu;
