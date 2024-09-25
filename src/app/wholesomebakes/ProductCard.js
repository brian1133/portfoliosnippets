import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab, Paper } from '@mui/material';

const ProductCard = ({ product, addToCart }) => {
  const [selectedPackage, setSelectedPackage] = useState('Half Dozen');

  const handlePackageChange = (event, newValue) => {
    setSelectedPackage(newValue);
  };

  const handleAddToCart = () => {
    addToCart(product.name, selectedPackage, product.prices[selectedPackage]);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <Typography variant="h5" component="h3" gutterBottom color="primary.secondary">
        {product.name}
      </Typography>
      <Typography>{product.description}</Typography>
      <Tabs value={selectedPackage} onChange={handlePackageChange} centered sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'primary', // Color of the indicator (underline)
        },
        '& .MuiTab-root': {
          color: 'gray', // Default tab color (inactive)
        },
        '& .Mui-selected': {
          color: "primary.secondary", // Active tab color
        },
      }}>
        <Tab label="Half Dozen" value="Half Dozen" />
        <Tab label="Bakers Dozen" value="Bakers Dozen" />
      </Tabs>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom color="primary.secondary">
          {selectedPackage}
        </Typography>
        <Typography>Price: ${product.prices[selectedPackage]}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          style={{ marginTop: '20px'}}
        >
          Add to Cart
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductCard;
