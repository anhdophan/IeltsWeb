import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Logo = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
      MyCourses
    </Typography>
  </Link>
);

export default Logo;
