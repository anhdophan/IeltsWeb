import React from 'react';

const CourseUnit = ({ title, lessons }) => {
  const lessonTypes = ['Lesson', 'Exercise', 'Submission'];

  return (
    <section className="course-unit">
      <h2 className="unit-title">{title}</h2>
      <div className="unit-content">
        <div className="lesson-list">
          {lessonTypes.map((type, index) => (
            <div key={index} className="lesson-item">
              <img src ="https://cdn-icons-png.flaticon.com/128/2702/2702134.png" alt="" className="lesson-icon" />
              <span className="lesson-type">{type}</span>
            </div>
          ))}
        </div>
        <div className="lesson-actions">
          {Array(lessons).fill().map((_, index) => (
            <button key={index} className="mark-done-button">Mark as done</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseUnit;