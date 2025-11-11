import React from 'react';
import styles from './Section.module.css';

const Section = ({ id, icon, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;