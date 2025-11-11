import React from 'react';
import { Code } from 'lucide-react';
import Section from '../Common/Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <Section 
      id="projects" 
      icon={<Code size={24} />} 
      title="Projects"
      subtitle="Things that I built as side projects..."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;