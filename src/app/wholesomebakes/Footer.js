import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Wholesome Bakes by Megan & Stacie
      </Typography>
    </Box>
  );
}

export default Footer;
