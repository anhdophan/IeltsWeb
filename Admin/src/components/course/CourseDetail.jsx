import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Paper, Button, Grid, Avatar, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import ImageIcon from '@mui/icons-material/Image';

export default function CourseDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm lấy thông tin khóa học từ API
  const fetchCourseDetail = async () => {
    try {
      const response = await axios.get(`https://ieltsweb.onrender.com/api/Course/${id}`);
      setCourse(response.data);
    } catch (error) {
      console.error('Error fetching course details:', error);
      setError('Không thể tải thông tin khóa học.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, [id]); // Chạy lại hàm khi id thay đổi

  // Nếu đang tải hoặc có lỗi, hiển thị thông báo
  if (loading) return <Typography variant="h6">Đang tải...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  // Nếu khóa học không tồn tại
  if (!course) return <Typography variant="h6" color="error">Khóa học không tồn tại.</Typography>;

  return (
    <Box 
      sx={{ 
        padding: 2, 
        backgroundColor: '#f4f6f8', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, width: '100%', maxWidth: 800 }}>
        {/* Avatar (Course Image) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Avatar 
            src={course.courseIMG} 
            sx={{ width: 240, height: 240, bgcolor: 'primary.main' }}
          >
            <ImageIcon sx={{ fontSize: 60 }} />
          </Avatar>
        </Box>

        {/* Course Info */}
        <Typography variant="h4" gutterBottom>
          {course.courseName}
        </Typography>
        <Typography variant="body1" paragraph>
          {course.courseDescription}
        </Typography>
        <Typography variant="h6" color="green" sx={{ fontWeight: 'bold' }}>
          Giá: {course.price}
        </Typography>

        {/* Additional course details */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>Thông tin thêm</Typography>

          {/* Additional Images */}
          <Typography variant="h6" gutterBottom>Ảnh thêm:</Typography>
          <List sx={{ padding: 0 }}>
            {(course.courseIMGMore && course.courseIMGMore.length > 0) ? (
              course.courseIMGMore.map((img, index) => (
                <ListItem key={index}>
                  <img src={img.link} alt={`Additional Image ${index}`} width="100%" />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Hiện không có thông tin" />
              </ListItem>
            )}
          </List>

          {/* Video Links */}
          <Typography variant="h6" gutterBottom>Video khóa học:</Typography>
          <List sx={{ padding: 0 }}>
            {(course.videoLinkCourses && course.videoLinkCourses.length > 0) ? (
              course.videoLinkCourses.map((video, index) => (
                <ListItem key={index}>
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    {`Video ${index + 1}`}
                  </a>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Hiện không có thông tin" />
              </ListItem>
            )}
          </List>

          {/* Teachers */}
          <Typography variant="h6" gutterBottom>Giảng viên:</Typography>
          <List sx={{ padding: 0 }}>
            {(course.Teachers && course.Teachers.length > 0) ? (
              course.Teachers.map((teacher, index) => (
                <ListItem key={index}>
                  <ListItemText primary={teacher.name} secondary={teacher.description} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Hiện không có thông tin" />
              </ListItem>
            )}
          </List>

          {/* Students */}
          <Typography variant="h6" gutterBottom>Học viên:</Typography>
          <List sx={{ padding: 0 }}>
            {(course.Students && course.Students.length > 0) ? (
              course.Students.map((student, index) => (
                <ListItem key={index}>
                  <ListItemText primary={student.name} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Hiện không có thông tin" />
              </ListItem>
            )}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
