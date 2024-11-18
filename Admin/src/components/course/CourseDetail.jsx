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
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar  src={course.courseIMG} sx={ { width: 120, height: 120, bgcolor: 'primary.main' }}>
              <ImageIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {course.courseName}
            </Typography>
            <Typography variant="body1" paragraph>
              {course.courseDescription}
            </Typography>
            <Typography variant="h6" color="green" sx={{ fontWeight: 'bold' }}>
              Giá: {course.price}
            </Typography>
          </Grid>
        </Grid>

        {/* Additional course details */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>Thông tin thêm</Typography>

          <Typography variant="h6" gutterBottom>Ảnh thêm:</Typography>
          <List>
            {(course.courseIMGMore || []).map((img, index) => (
              <ListItem key={index}>
                <img src={img.link} alt={`Additional Image ${index}`} width="100%" />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom>Video khóa học:</Typography>
          <List>
            {(course.videoLinkCourses || []).map((video, index) => (
              <ListItem key={index}>
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  {`Video ${index + 1}`}
                </a>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom>Giảng viên:</Typography>
          <List>
            {(course.Teachers || []).map((teacher, index) => (
              <ListItem key={index}>
                <ListItemText primary={teacher.name} secondary={teacher.description} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom>Học viên:</Typography>
          <List>
            {(course.Students || []).map((student, index) => (
              <ListItem key={index}>
                <ListItemText primary={student.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
