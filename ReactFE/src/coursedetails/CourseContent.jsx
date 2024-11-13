import React from 'react';
import CourseHeader from './CourseHeader';
import CourseUnit from './CourseUnit';

const CourseContent = () => {
  const units = [
    { title: 'UNIT 1', lessons: 3 },
    { title: 'UNIT 2', lessons: 3 },
    { title: 'UNIT 3', lessons: 3 },
    { title: 'UNIT 4', lessons: 3 }
  ];

  return (
    <section className="course-content">
      <CourseHeader />
      {units.map((unit, index) => (
        <CourseUnit key={index} title={unit.title} lessons={unit.lessons} />
      ))}
    </section>
  );
};

export default CourseContent;