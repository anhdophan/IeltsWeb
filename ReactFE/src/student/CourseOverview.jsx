import React from 'react';
import styles from './CourseOverview.module.css';

const CourseOverview = () => {
  const courses = [
    { id: 1, title: 'Khóa học' },
    { id: 2, title: 'Khóa học' },
    { id: 3, title: 'Khóa học' },
    { id: 4, title: 'Khóa học' },
    { id: 5, title: 'Khóa học' },
    { id: 6, title: 'Khóa học' },
    { id: 7, title: 'Khóa học' },
    { id: 8, title: 'Khóa học' },
  ];

  return (
    
    <section className={styles.courseOverview}>
      <h2 className={styles.sectionTitle}>
        <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="" className={styles.icon}/>
        CourseOverview
      </h2>
      <img src="https://cdn-icons-png.flaticon.com/128/339/339879.png" alt="" className={styles.icon2} />
      <div className={styles.filterSection}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/ea1066cb83f692691855e909751042f6afae3a96e2217d1fd31c67ccda8ba97e?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.filterIcon} />
        <span className={styles.filterText}>All (except removed from view)</span>
      </div>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h3 className={styles.courseTitle}>{course.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.showMore}>
        <span>Show</span>
        <div className={styles.showMoreControl}>
          <span>0</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/51af284e18bb753d0fbe6e23a3079d2bb862cb99e21e0ba64b854c3693d9d316?apiKey=a7156eeee83b466eb594d236000740da&" alt="Expand" className={styles.expandIcon} />
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;