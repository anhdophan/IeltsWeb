import React from 'react';
import styles from './RecentCourses.module.css';

const RecentCourses = () => {
  return (
    <section className={styles.recentCourses}>
      <img src="https://cdn-icons-png.flaticon.com/128/860/860821.png" alt="" className={styles.icon3} />
      <h2 className={styles.sectionTitle}>
        <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="" className={styles.icon}/>
        Recently accessed courses
      </h2>
      <img src="https://cdn-icons-png.flaticon.com/128/339/339879.png" alt="" className={styles.icon1} />
      <div className={styles.courseControls}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/dfd9e60e890bf79ca251e7ab20fed026bfda1637f42fcfd469a01adb3f27f1f9?apiKey=a7156eeee83b466eb594d236000740da&" alt="Previous" className={styles.controlIcon} />
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/ed20121847b4737ad6c642111c11b58e56ee808a122c6e2a0b60dced6b466a23?apiKey=a7156eeee83b466eb594d236000740da&" alt="Next" className={styles.controlIcon} />
      </div>
      <div className={styles.course}>
        <h3 className={styles.courseTitle}>Lớp học</h3>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/860/860821.png" alt="" className={styles.icon2} />
    </section>
  );
};

export default RecentCourses;