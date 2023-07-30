import { projects } from '@/constants/cmsInfo';
import type { Modal } from '../../../../types';
import styles from './style.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { scaleAnimation } from './animations';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  modal: Modal;
}

const ProjectModal: React.FC<Props> = ({ modal }) => {
  const { isActive, projectIndex } = modal;
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useLayoutEffect(() => {
    // Move modal Container
    const moveContainerX = gsap.quickTo(containerRef.current, 'left', {
      duration: 0.8,
      ease: 'power3'
    });
    const moveContainerY = gsap.quickTo(containerRef.current, 'top', {
      duration: 0.8,
      ease: 'power3'
    });

    // Move cursor
    const xMoveCursor = gsap.quickTo(cursorRef.current, 'left', { duration: 0.5, ease: 'power3' });
    const yMoveCursor = gsap.quickTo(cursorRef.current, 'top', { duration: 0.5, ease: 'power3' });

    // Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, 'left', {
      duration: 0.4,
      ease: 'power3'
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, 'top', {
      duration: 0.4,
      ease: 'power3'
    });

    window.addEventListener('mousemove', (event) => {
      const { pageX, pageY } = event;
      moveContainerX(pageX);
      moveContainerY(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        className={styles.container}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? 'enter' : 'exit'}
        ref={containerRef}
      >
        <div style={{ top: `${projectIndex * -100}%` }} className={styles.modalWrapper}>
          {projects.map(({ title, img, color }, index) => (
            <div className={styles.modal} key={index} style={{ backgroundColor: color }}>
              <Image src={`/images/${img}`} alt={title} width={300} height={0} />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={styles.cursor}
        ref={cursorRef}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? 'enter' : 'exit'}
      ></motion.div>
      <motion.div
        className={styles.cursorLabel}
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? 'enter' : 'exit'}
      >
        View
      </motion.div>
    </>
  );
};

export default ProjectModal;
