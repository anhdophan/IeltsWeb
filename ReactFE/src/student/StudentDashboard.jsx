import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CourseGrid from './CourseGrid';
import Calendar from './Calendar';
import Footer from './Footer';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Header />
      <main>
        <Sidebar />
        <div className="main-content">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8595007c3af69e9758a1f19bbc03c5420dc0cb28ba4000b0d8b632d87d107a99?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Breadcrumb" className="breadcrumb" />
          <CourseGrid />
          <Calendar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentDashboard;