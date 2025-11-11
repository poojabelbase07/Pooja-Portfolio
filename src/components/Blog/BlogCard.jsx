import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import styles from './BlogCard.module.css';

const BlogCard = ({ post }) => {
  const { title, description, link, date } = post;

  return (
    <article className={styles.card}>
      <div className={styles.marker}></div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {date && (
            <div className={styles.date}>
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          )}
        </div>
        
        <p className={styles.description}>{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.readMore}
        >
          Read More <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;