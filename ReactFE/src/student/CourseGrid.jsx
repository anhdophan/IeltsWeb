import React from 'react';

const CourseCard = ({ color }) => (
  <div className={`course-card ${color === 'blue' ? 'bg-blue' : 'bg-red'}`}>
    Khóa học
  </div>
);

const CourseGrid = () => {
  return (
    <section className="course-grid">
      <div className="grid-row">
        <div className="grid-column">
          <div className="course-list">
            <div className="course-filter">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f001c9e3b4bde2876819ee0a28cc8f8dd575839f5c2a139111bdfa841960b180?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Filter" className="filter-icon" />
              <span className="filter-text">All (except removed from view)</span>
            </div>
            <div className="course-items">
              <div className="course-row">
                <div className="course-column">
                  <CourseCard color="red" />
                </div>
                <div className="course-column">
                  <CourseCard color="blue" />
                </div>
              </div>
              <div className="course-row">
                <div className="course-column">
                  <CourseCard color="blue" />
                </div>
                <div className="course-column">
                  <CourseCard color="red" />
                </div>
              </div>
              <div className="course-row">
                <div className="course-column">
                  <CourseCard color="red" />
                </div>
                <div className="course-column">
                  <CourseCard color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;