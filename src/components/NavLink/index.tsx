import styles from './style.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from './animation';

interface Props {
  title: string;
  href: string;
  index: number;
}

const NavLink: React.FC<Props> = ({ title, href, index }) => {
  return (
    <motion.div custom={index} variants={slide} initial="initial" animate="animate" exit="exit">
      <Link className={styles.link} href={href}>
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
