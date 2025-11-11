import React from 'react';
import styles from './SkillBadge.module.css';

const SkillBadge = ({ skill, variant = 'default' }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {skill}
    </span>
  );
};

export default SkillBadge;