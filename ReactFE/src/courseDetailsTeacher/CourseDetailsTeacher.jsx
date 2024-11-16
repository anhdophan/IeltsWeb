import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CourseContent from './CourseContent';
import Footer from './Footer';
import './CourseDetailsTeacher.css';

const CourseDetailsTeacher = () => {
  return (
    <div className="course-details">
      <Header />
      <main className="course-main">
        <Sidebar />
        <CourseContent />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailsTeacher;