import React from 'react';
import styles from './InfoCard.module.css';

function InfoCard({ title, description, imageSrc, imageAlt }) {
  return (
    <article className={styles.infoCard}>
      <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;