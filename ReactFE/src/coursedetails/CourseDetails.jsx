import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CourseContent from './CourseContent';
import Footer from './Footer';
import './CourseDetails.css';

const CourseDetails = () => {
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

export default CourseDetails;