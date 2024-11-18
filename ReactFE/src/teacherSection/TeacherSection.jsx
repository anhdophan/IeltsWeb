import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import Header from '../components/Main Page/Header';
import ImageComponent from './ImageComponent';
import TeacherFeatures from './TeacherFeatures';
import Footer from './Footer';
import CourseList from '../components/CourseList';

function TeacherSection() {
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
      <Box
        className="center-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Đang tải dữ liệu...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        className="center-content"
        sx={{
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <section className="teacher-section">
      <div className="teacher-gallery">
        <Header />
        <ImageComponent />
      </div>
      <TeacherFeatures />
      <RegistrationForm />
      <main>
        <CourseList data={courses} />
      </main>
      <Footer />
      <style jsx>{`
      .teacher-section {
  max-width: 1200px;
  margin-top:500px;
  padding: 2rem;

}

.section-title {
  font-size: 2rem;
  text-align: center;
  color: #05224a;
  margin-bottom: 2rem;
}


.registration-section {
    background-color: #05378e; /* Nền sáng cho phần đăng ký */
    padding: 40px; /* Khoảng cách bên trong */
    border-radius: 8px; /* Bo tròn các góc */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
    width: 100%; /* Chiều ngang bằng 100% */
    max-width: 100vw; /* Đảm bảo không vượt quá chiều rộng viewport */
    margin: 0; /* Loại bỏ margin nếu có */
  }
  
  .section-title {
    font-size: 24px; /* Kích thước chữ cho tiêu đề */
    text-align: center; /* Căn giữa tiêu đề */
    margin-bottom: 10px; /* Khoảng cách dưới tiêu đề */
    color: #fff; /* Màu chữ */
  }
  
  .section-subtitle {
    font-size: 16px; /* Kích thước chữ cho phụ đề */
    text-align: center; /* Căn giữa phụ đề */
    margin-bottom: 20px; /* Khoảng cách dưới phụ đề */
    color: #fff; /* Màu chữ */
  }
  
  .registration-form {
    display: flex; /* Hiển thị dưới dạng flexbox */
    flex-direction: column; /* Xếp dọc các phần tử */
  }
  
  .form-group {
    margin-bottom: 15px; /* Khoảng cách giữa các nhóm biểu mẫu */
    margin-left: 356px;
  }
  
  .form-group label {
    display: block; /* Hiển thị label dưới dạng khối */
    margin-bottom: 5px; /* Khoảng cách dưới label */
    font-size: 14px; /* Kích thước chữ cho label */
    color: #fff; /* Màu chữ cho label */
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select {
    width: 80%; /* Thay đổi chiều rộng ở đây */
    max-width: 300px; /* Giới hạn chiều rộng tối đa (tùy chọn) */
    padding: 10px; /* Khoảng cách bên trong */
    border: 1px solid #000000; /* Viền xung quanh */
    border-radius: 4px; /* Bo tròn các góc */
    font-size: 14px; /* Kích thước chữ */
    color: #000000; /* Màu chữ */
    background-color: white;
  }
  input[type="text"],
  input[type="tel"]
 {
    width: calc(50% - 10px); /* Giảm chiều rộng còn lại 50% - khoảng cách giữa các trường */
    max-width: 150px; /* Giới hạn chiều rộng tối đa */
  }
  
  input[type="text"]:focus,
  input[type="tel"]:focus,
  input[type="email"]:focus,
  select:focus {
    border-color: #000000; /* Màu viền khi được chọn */
    outline: none; /* Loại bỏ outline mặc định */
  }

  input::placeholder {
    color: #000000; /* Màu trắng cho placeholder */
  }
  
  .submit-button {
    background-color: #ed1c25; /* Màu nền cho nút đăng ký */
    color: white; /* Màu chữ cho nút */
    border: none; /* Loại bỏ viền */
    padding: 12px; /* Khoảng cách bên trong */
    font-size: 16px; /* Kích thước chữ cho nút */
    font-weight: bold; /* Chữ đậm cho nút */
    border-radius: 4px; /* Bo tròn các góc */
    cursor: pointer; /* Thay đổi con trỏ khi di chuột qua nút */
    transition: background-color 0.3s; /* Hiệu ứng chuyển màu */
    width: 80%; /* Thay đổi chiều rộng ở đây */
    max-width: 300px; /* Giới hạn chiều rộng tối đa (tùy chọn) */
    display: block;
    margin: 20px auto; 
  }
  
  .submit-button:hover {
    background-color: #b01518; /* Màu nền khi di chuột qua nút */
  }
  
  .countdown {
    margin-top: 30px; /* Khoảng cách trên countdown */
    text-align: center; /* Căn giữa nội dung countdown */
    
  }
  
  .countdown-title {
    font-size: 18px; /* Kích thước chữ cho tiêu đề countdown */
    margin-bottom: 10px; /* Khoảng cách dưới tiêu đề countdown */
    color: #fff; /* Màu chữ cho tiêu đề countdown */
  }
  
  .countdown-timer {
    display: flex; /* Hiển thị dưới dạng flexbox */
    justify-content: center; /* Căn giữa nội dung */
  }
  
  .countdown-item {
    margin: 0 10px; /* Khoảng cách giữa các phần tử countdown */
    text-align: center; /* Căn giữa nội dung trong countdown item */
  }
  
  .countdown-value {
    font-size: 24px; /* Kích thước chữ cho giá trị countdown */
    font-weight: bold; /* Chữ đậm cho giá trị countdown */
    color: #05224a; /* Màu chữ cho giá trị countdown */
    background-color: whitesmoke; /* Màu nền trắng cho countdown-value */
    padding: 10px; /* Khoảng cách bên trong cho countdown-value */
    border-radius: 4px; /* Bo tròn các góc cho countdown-value */
  }
  
  .countdown-label {
    font-size: 14px; /* Kích thước chữ cho nhãn countdown */
    color: whitesmoke; /* Màu chữ cho nhãn countdown */
    display: block; /* Hiển thị nhãn dưới dạng khối */
    margin-top: 5px; /* Khoảng cách trên cho nhãn */
  }
  
.timer {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  font-size: 2rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  color: #003066;
  padding: 0.5rem;
  border-radius: 5px;
}

.unit {
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin-left: 500px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}


  `}</style>
    </section>
  );
}

export default TeacherSection;


