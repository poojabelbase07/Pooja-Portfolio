import React from 'react';
import { ExternalLink, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello there, I'm</p>
        
        <h1 className={styles.name}>
          {personalInfo.name}
        </h1>
        
        <h2 className={styles.tagline}>
          {personalInfo.tagline}
        </h2>
        
        <p className={styles.description}>
          {personalInfo.description}
        </p>
        
        <div className={styles.actions}>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Check out my resume! 
            <ExternalLink size={18} />
          </a>
          
          <button 
            onClick={scrollToAbout}
            className={styles.secondaryBtn}
          >
            Learn More
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} onClick={scrollToAbout}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;