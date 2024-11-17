import React from 'react';
import Header from './Header';
import CourseContent from './CourseContent';
import Footer from './Footer';
import HeaderSidebar from './HeaderSidebar';
import NavItem from './NavItem';
import ProfileIcon from './ProfileIcon';
//import './CourseDetails.css';

const CourseDetails = () => {
  return (
    <div className="course-details">
      <Header/>
      <main className="course-main">
      <HeaderSidebar/>
        <CourseContent />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;