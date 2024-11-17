import React from 'react';
import Header from '../components/Main Page/Header';
//import Sidebar from './Sidebar';
import MainContent from './MainContent';
//import Footer from '../components/Main Page/Footer';
import Footer from 'D:/IeltsWeb/ReactFE/src/coursedetails/Footer.jsx';
import styles from './Dashboard.module.css';
import HeaderSidebar from 'D:/IeltsWeb/ReactFE/src/coursedetails/HeaderSidebar.jsx';

const Dashboard = () => {
  return (
    <div>
    <Header />
    <div className={styles.dashboard}>
      
      <main className={styles.mainContent}>
        <HeaderSidebar />
        <MainContent />
      </main>
     
    </div>
     <Footer />
     </div>
  );
};

export default Dashboard;