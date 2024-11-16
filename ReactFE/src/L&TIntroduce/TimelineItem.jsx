import React from 'react';
import styles from './TimelineItem.module.css';

function TimelineItem({ year, title, description, imageSrc, isEven }) {
  return (
    <article className={`${styles.timelineItem} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.content}>
        <h3 className={styles.year}>{year}</h3>
        <div className={styles.details}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <img src={imageSrc} alt="" className={styles.image} />
      
    </article>
  );
}

export default TimelineItem;