import React from 'react';

const CourseHeader = () => {
  return (
    <header className="course-header">
      <h1 className="course-title">Mã khóa học _ Tên khóa học _ Tên giảng viên</h1>
      <div className="course-actions">
        <button className="action-button" aria-label="Action 2">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eee17c65b9e97983c81e12bcc3d306fb601f7a6d2bd7702963c28584b008ca60?placeholderIfAbsent=true&apiKey=2bafca70d7763994" alt="" />
        </button>
      </div>

      {/* Container chứa video và ảnh */}
      <div className="course-video">
        <div className="video-placeholder"></div>
        <img
          src="https://st.ielts-fighter.com/src/ielts-fighter-image/2023/09/04/c070ab75-c7c8-411b-ba3b-4be1d0bc0087.jpg"
          alt="Extra content"
          className="extra-image"
        />
      </div>

      <button className="action-button1" aria-label="Action 4">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eee17c65b9e97983c81e12bcc3d306fb601f7a6d2bd7702963c28584b008ca60?placeholderIfAbsent=true&apiKey=2bafca70d7763994" alt="" />
      </button>

      <div className="announcement">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33e26266767e309a188a59aa129fba6114c767102b23922e94c7a7993974c6f?placeholderIfAbsent=true&apiKey=2bafca70d7763994" alt="" className="announcement-icon" />
        <span className="announcement-text">Announcement</span>
      </div>
    </header>
  );
};

export default CourseHeader;
