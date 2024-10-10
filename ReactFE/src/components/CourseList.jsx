import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, Avatar, Button, Pagination } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

export default function CourseList({ data }) {
  const navigate = useNavigate();

  // Số khóa học hiển thị mỗi trang (6 khóa học - 2 hàng, mỗi hàng 3 box)
  const itemsPerPage = 6;

  // Sử dụng state để lưu số trang hiện tại
  const [page, setPage] = useState(1);

  // Tính tổng số trang
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Chỉ hiển thị khóa học của trang hiện tại
  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleClick = (id) => {
    navigate(`/Course/${id}`);
  };

  // Xử lý khi người dùng thay đổi trang
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxWidth: '1200px',
        margin: '0 auto',
        overflowX: 'auto',
        position: 'relative',
        paddingTop: '60px', // Thêm khoảng trống phía trên để không bị đè lên các khóa học
      }}
    >
      {/* Hiển thị danh sách các khóa học */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // 1 box trên mỗi hàng trên màn hình nhỏ
            sm: '1fr 1fr', // 2 box trên mỗi hàng trên màn hình trung bình
            md: '1fr 1fr 1fr', // 3 box trên mỗi hàng trên màn hình lớn
          },
          gap: '20px',
          width: '100%',
        }}
      >
        {paginatedData.length > 0 ? (
          paginatedData.map((item) => (
            <Box
              key={item.id}
              sx={{
                padding: '20px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                background: '#fff',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {/* Hiển thị hình ảnh khóa học */}
              <Avatar
                src={item.image}
                alt={item.courseName}
                sx={{
                  width: '100%',
                  height: '150px',
                  marginBottom: '15px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
                variant="square"
              />

              {/* Hiển thị tên khóa học */}
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                {item.courseName}
              </Typography>

              {/* Hiển thị mô tả khóa học */}
              <Typography variant="body2" sx={{ marginBottom: '15px' }}>
                {item.description ? item.description : 'Không có mô tả.'}
              </Typography>

              {/* Hiển thị giá khóa học */}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'bold', marginBottom: '15px', color: 'green' }}
              >
                Giá: {item.price}
              </Typography>

              {/* Nút đăng ký */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick(item.id)}
              >
                Đăng ký
              </Button>
            </Box>
          ))
        ) : (
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'text.secondary', textAlign: 'center' }}
          >
            Không có khóa học nào để hiển thị.
          </Typography>
        )}
      </Box>

      {/* Điều khiển phân trang */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
}
