import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material'; 
import StudentTestimonial from './StudentTestimonial';
import ResultsGallery from './ResultsGallery';
import ImageContainer from './ImageContainer';
import Header from '../components/Main Page/Header';
import ImageComponent from './ImageComponent';
import StudentSuccessStories from './StudentSuccessStories';
import SuccessStoryCard from './SuccessStoryCard';
import RegistrationForm from '../L&TIntroduce/RegistrationForm';
import Footer from '../coursedetails/Footer';
import CourseList from '../components/CourseList';


function IELTSResults() {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const testimonials = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/083f17a2d9938cfa41197d3e1119aa7c5b8a51aaf5bba1cda1236af294f3d5ce?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", alt: "Student testimonial 1" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24a686ec243b96082f13be991200f884a6413deb2da09f004844151923135d6b?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", alt: "Student testimonial 2" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/273eb8cc686ffd1fad6bd919ea7b2f33d1ddcacd1323d1914b8da5841e91169b?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", alt: "Student testimonial 3" }
  ];
  

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
       <Header/>
      <div className="image-container-wrapper">
        <ImageContainer />
        <section className="results-overlay">
          <div className="results-header">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/620d7fb5d101b48cd40db4c416591cfc80ce327851718742d245407dc5fbe4fc?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" alt="IELTS Results" className="results-logo" />
            <div className="results-text">
              <h1 className="results-title">99% HỌC VIÊN ĐẠT KẾT QUẢ ĐẦU RA CHO KỲ VỌNG</h1>
              <p className="results-subtitle">IELTS không chỉ là một chứng chỉ, mà là bước khởi đầu của một hành trình dài.</p>
            </div>
          </div>
          <section className="results-content">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7816c1a7ceeee33ae36f35b6235d2ec999655727f58fc3fd3c2bc1c2642ead56?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" alt="IELTS Students" className="results-image" />
            <StudentTestimonial />
          </section>
        </section>
      </div>
      <ResultsGallery testimonials={testimonials} />
      <ImageComponent/>
      <StudentSuccessStories/>
      <SuccessStoryCard/>
      <RegistrationForm/>
      <main>
          <CourseList data={courses} />
          
      </main>
      <Footer/>
      <style jsx>{`
        .ielts-results {
          font-family: 'Open Sans', sans-serif;
        }
        .image-container-wrapper {
          position: relative;
          margin-top: -30px;
        }
        .results-overlay {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 20px;
          text-align: center;
          color: white;
          z-index: 1.9;
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }
        .results-header {
          display: flex;
          align-items: center;
          gap: 19px;
          max-width: 1069px;
          margin-top:-250px;
          text-align: center;
          flex-direction: column;
          margin-bottom: 250px;
        }
        .results-logo {
          width: 100px;
          height: auto;
          margin-bottom: 200px;
          margin-left: -800px;
        }
        .results-text {
          flex-grow: 1;
        }
        .results-title {
          font-size: 30px;
          font-weight: 700;
          color: #ea1a23;
          line-height: 56px;
          margin-top: -300px;
          margin-right: -150px;
          
        }
        .results-subtitle {
          font-size: 18px;
          color: black;
          line-height: 28.8px;
          margin-right: -140px;
          font-weight: 700;
        }
        .results-content {
          display: flex;
          gap: 0px;
          margin-top: -450px;
          justify-content: center;
          align-items: center;
          margin-right: 130px;
        }
        .results-image {
          width: 48.5%;
          height: auto;
          margin-bottom: -350px;
        }
        @media (max-width: 991px) {
          .results-header {
            flex-direction: column;
            align-items: center;
          }
          .results-content {
            flex-direction: column;
          }
          .results-image {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
export default IELTSResults;
