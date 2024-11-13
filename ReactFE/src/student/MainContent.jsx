import React from 'react';
import RecentCourses from './RecentCourses';
import CourseOverview from './CourseOverview';
import Calendar from './Calendar';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
          <div className={styles.leftContainer}>
            <RecentCourses />
            <CourseOverview />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.box}> 
              <div className= {styles.img} > 
              <img src ="https://st.ielts-fighter.com/src/ielts-fighter-image/2023/09/04/c070ab75-c7c8-411b-ba3b-4be1d0bc0087.jpg"/>
                
            </div> 
            </div>
            <div className={styles.box1}> 
              <div className= {styles.img1} > 
              <img src ="https://ktdcgroup.vn/wp-content/uploads/2020/08/KTDC_IEOpenDay_Poster.jpg"/>
                
            </div> 
            </div>
            <Calendar />
          </div>
        </div>
  );
};

export default MainContent;