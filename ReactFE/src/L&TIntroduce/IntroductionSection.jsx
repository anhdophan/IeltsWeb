import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material'; 
//import React from 'react';
import Header from '../components/Main Page/Header';
import Hero from './Hero';
import About from './About';
import AboutSection from './AboutSection';
import InfoCard from './InfoCard';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import AchievementCard from './AchievementCard';
import AchievementsSection from './AchievevmentsSection';
import Footer from '../coursedetails/Footer';
import ImageContainer from './ImageContainer';
import RegistrationForm from './RegistrationForm';
import CourseList from '../components/CourseList';


function IntroductionSection() {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchCourses = async () => {
    try {
        const response = await fetch('https://ieltsweb.onrender.com/api/Course', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            setCourses(data); // Set the courses data
        } else {
            console.error('Error fetching courses:', response.statusText);
            setError('Lỗi khi tải dữ liệu!');
        }
    } catch (error) {
        console.error('Lỗi kết nối:', error);
        setError('Lỗi khi tải dữ liệu!');
    } finally {
        setLoading(false);
    }
  };


  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <Box className="center-content" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Đang tải dữ liệu...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="center-content" sx={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div 
      className="center-content" 
      sx={{ minHeight: '100vh', paddingTop: '80px' }} // Thêm padding-top để tránh Header đè lên nội dung
    >
      <Header />
       <Hero />
       <About />
       <AboutSection />
       <InfoCard />
       <AchievementsSection />      
       <AchievementCard />
       <Timeline />
       
       <ImageContainer />
       <RegistrationForm />
      <main>
          <CourseList data={courses} />
      </main>
      
      <Footer />
       <style jsx>{`
         .introduction {
           background-color: #fff;
           display: flex;
           padding-bottom: 30px;
           flex-direction: column;
           overflow: hidden;
           align-items: center;
         }
         @media (max-width: 991px) {
           .introduction {
             max-width: 100%;
           }/         }
       `}</style>
    </div>
  );
}

export default IntroductionSection;

// const IntroductionSection = ({ courses }) => { // Nhận courses từ props
//   return (
//     <section className="introduction">
//       <Header />
//       <Hero />
//       <About />
//       <AboutSection />
//       <InfoCard />
//       <AchievementsSection />
//       <AchievementCard />
//       <Timeline />
//       <TimelineItem />
//       <ImageContainer />
//       <RegistrationForm />
//       <main>
//           <CourseList data={courses} /> 
//       </main>
//       <Footer />
//       <style jsx>{`
//         .introduction {
//           background-color: #fff;
//           display: flex;
//           padding-bottom: 30px;
//           flex-direction: column;
//           overflow: hidden;
//           align-items: center;
//         }
//         @media (max-width: 991px) {
//           .introduction {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IntroductionSection;