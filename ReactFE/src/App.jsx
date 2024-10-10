import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseList from './components/CourseList'; // Component danh sách khóa học
import { Container, Typography, Box, CircularProgress } from '@mui/material'; // Import Material-UI components
import './styles.css'; // Import styles
import Header from './components/Header';

function App() {
  // Trạng thái dữ liệu khóa học
  const [courses, setCourses] = useState([]); // Dữ liệu khóa học
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Hàm fetch dữ liệu khóa học từ API
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5009/api/Course');
      setCourses(response.data); // Gán dữ liệu vào biến courses
    } catch (error) {
      setError('Lỗi khi tải dữ liệu!'); // Xử lý lỗi
    } finally {
      setLoading(false); // Đặt trạng thái tải về false dù có lỗi hay không
    }
  };

  // Gọi fetchCourses khi component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Nếu đang tải, hiển thị spinner
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

  // Nếu có lỗi, hiển thị thông báo lỗi
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
    <Container maxWidth="md" className="center-content" sx={{ minHeight: '100vh', paddingTop: '4rem' }}>
    <Header /> {/* Hiển thị header trên cùng */}
    <Box 
      sx={{ 
        maxHeight: 'calc(100vh - 200px)', 
        overflowY: 'auto', 
        overflowX: 'hidden', 
        paddingBottom: '4rem',
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none' // Chrome, Safari, WebKit
        }
      }}
    >
      <CourseList data={courses} />
    </Box>
    </Container>

  );
}

export default App;
