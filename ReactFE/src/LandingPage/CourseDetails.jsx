import React from 'react';
import styles from './CoursePromotion.module.css';



const CourseDetails = () => {
  return (
    <div className={styles.detailsWrapper}>
      <h1 className={styles.courseTitle}>
        KHÓA HỌC MỤC TIÊU<br />
        6.0-6.5 IELTS<br />
        CAM KẾT ĐẦU RA
      </h1>
      <div className={styles.separator} />
      <p className={styles.courseDescription}>
        Lộ trình học TINH GỌN, CÁ NHÂN HÓA giúp bạn chinh phục<br />
        IELTS nhanh chóng và dễ dàng
      </p>
      <button className={styles.ctaButton}>
        NHẬN TƯ VẤN NGAY
      </button>
    </div>
  );
};

export default CourseDetails;