import React from 'react';
import styles from './Loading.module.css';

const Loading = ({ size = 'medium', message = 'Loading...' }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[size]}`}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Loading;