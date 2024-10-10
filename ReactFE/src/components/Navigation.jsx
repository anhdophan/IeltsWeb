import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => (
  <>
    <Button component={Link} to="/" sx={{ color: 'text.primary' }}>
      Home
    </Button>
    <Button component={Link} to="/courses" sx={{ color: 'text.primary' }}>
      Courses
    </Button>
    <Button component={Link} to="/about" sx={{ color: 'text.primary' }}>
      About
    </Button>
  </>
);

export default Navigation;
