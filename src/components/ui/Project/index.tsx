import Link from 'next/link';
import type { Modal } from '../../../../types';
import styles from './style.module.css';

interface Props {
  title: string;
  type: string;
  href: string;
  projectIndex: number;
  setModal: (modal: Modal) => void;
}

const Project: React.FC<Props> = ({
  title,
  type = 'Design & Development',
  href,
  projectIndex,
  setModal
}) => {
  return (
    <li
      className={styles.project}
      onMouseEnter={() => {
        setModal({ isActive: true, projectIndex });
      }}
      onMouseLeave={() => {
        setModal({ isActive: false, projectIndex });
      }}
    >
      <Link href={href} className={styles.projectLink}>
        <h3>{title}</h3>
        <p>{type}</p>
      </Link>
    </li>
  );
};

export default Project;
