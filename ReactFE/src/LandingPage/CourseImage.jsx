import React from 'react';
import styles from './CoursePromotion.module.css';


const CourseImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed54c9257f6d013619465fe61797882df578cd2b03f515f0f07027c6b1303373?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" 
        alt="IELTS course promotional image" 
        className={styles.courseImage} 
        loading="lazy"
      />
    </div>
  );
};

export default CourseImage;