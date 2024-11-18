import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CourseCreate() {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleImageUpload = (e) => {
    setImages(e.target.files); // Lưu danh sách file ảnh
  };

  const handleVideoUpload = (e) => {
    setVideos(e.target.files); // Lưu danh sách file video
  };

  const handleCreateCourse = async () => {
    // Kiểm tra dữ liệu trước khi gửi API
    if (!courseName || !price || !description) {
      alert('Vui lòng nhập đầy đủ thông tin khóa học');
      return;
    }

    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('price', parseFloat(price));
    formData.append('courseDescription', description);

    // Thêm các file ảnh vào formData
    Array.from(images).forEach((image) => {
      formData.append('Images', image);
    });

    // Thêm các file video vào formData
    Array.from(videos).forEach((video) => {
      formData.append('Videos', video);
    });

    try {
      const response = await fetch('https://ieltsweb.onrender.com/api/Course', {
        method: 'POST',
        body: formData, // Gửi formData thay vì JSON
      });

      if (response.ok) {
        const createdCourse = await response.json();
        console.log('Khóa học đã được tạo:', createdCourse);

        // Điều hướng trở lại trang danh sách khóa học
        navigate('/Course');
      } else {
        const errorData = await response.json();
        console.error('Lỗi tạo khóa học:', errorData);
        alert('Có lỗi xảy ra khi tạo khóa học.');
      }
    } catch (error) {
      console.error('Lỗi kết nối:', error);
      alert('Lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Tạo khóa học mới
      </Typography>
      <TextField
        label="Tên khóa học"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        label="Giá"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
        type="number" 
        inputProps={{ min: 0 }}
      />
      <TextField
        label="Mô tả khóa học"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: '20px' }}
      />
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Tải ảnh lên
      </Typography>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={{ marginBottom: '20px' }}
      />
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Tải video lên
      </Typography>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleVideoUpload}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateCourse}>
        Tạo khóa học
      </Button>
    </Box>
  );
}
