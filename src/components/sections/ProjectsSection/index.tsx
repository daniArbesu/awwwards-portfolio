import { useState } from 'react';
import styles from './style.module.css';
import { projects } from '@/constants/cmsInfo';
import Project from '@/components/ui/Project';
import ProjectModal from '@/components/ui/ProjectModal';

const ProjectsSection = () => {
  const [modal, setModal] = useState({ isActive: false, projectIndex: 0 });

  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>Recent Work</h2>
      <ul className={styles.container}>
        {projects.map(({ title, type, href }, index) => (
          <Project
            key={index}
            title={title}
            type={type}
            href={href}
            projectIndex={index}
            setModal={setModal}
          />
        ))}
      </ul>
      <ProjectModal modal={modal} />
    </section>
  );
};

export default ProjectsSection;
