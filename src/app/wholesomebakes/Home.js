import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Tabs,
  Tab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails, Divider,
} from "@mui/material";
import {
  ShoppingCart,
  BakeryDining,
  LocalShipping,
  ArrowForward,
  ExpandMore,
  
} from "@mui/icons-material";
import ProductCard from "./ProductCard";
import bakeryImage from "../../../assets/wholesomebakes/bakery.jpg";
import eclairImage from "../../../assets/wholesomebakes/eclair.jpg";
import oatmealCreamPieImage from "../../../assets/wholesomebakes/oatmealCreamPie.jpg";
import { useNavigate } from "react-router-dom";

function Home({ addToCart }) {
  const [popupOpen, setPopupOpen] = useState(true);
  const [whyBuyTab, setWhyBuyTab] = useState(0);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const navigate = useNavigate();

  const handleWhyBuyChange = (event, newValue) => {
    setWhyBuyTab(newValue);
  };

  const products = [
    {
      id: 1,
      name: 'Eclairs',
      description: 'Our eclairs are made with the finest ingredients.',
      prices: { 'Half Dozen': 30, 'Bakers Dozen': 50 },
      image: eclairImage,
    },
    {
      id: 2,
      name: 'Oatmeal Cream Pies',
      description: 'Our oatmeal cream pies are a nostalgic treat.',
      prices: { 'Half Dozen': 30, 'Bakers Dozen': 50 },
      image: oatmealCreamPieImage,
    },
  ];

  return (
    <Container
      style={{
        marginTop: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${bakeryImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />
      </Box>
      <Box
        style={{
          width: "50%",
          height: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Wholesome Bakes
        </Typography>
        <Typography variant="body1" component="p">
          At Wholesome Bakes , we believe in creating delightful, handcrafted
          treats that bring joy and warmth to every occasion.
        </Typography>
        <Typography variant="body1" component="p">
          Our baked goods are made with the finest ingredients and a whole lot
          of love, ensuring every bite is a taste of home.
        </Typography>
        <Typography variant="body1" component="p">
          Order for celebrations, special occasions, to say thank you to a
          client, congratulations, and so much more! You order and we can
          deliver. Maybe you will order some just for yourself. We won't tell
        </Typography>
      </Box>

      <Divider />
      <Box sx={{ p: 2 }}></Box>

      {/* Eclairs and Oatmeal Cream Pies Section */}
      <Box>
        <Typography variant="h2">On the Menu</Typography>
        
      </Box>

      <Box my={6}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider />
      <Box sx={{ p: 2 }}></Box>

      {/* Why Buy From Us Section */}
      <Box my={6} textAlign={"center"}>
        <Typography variant="h4" component="h2" gutterBottom color="text.primary">
          Why Buy From Us
        </Typography>
        <Tabs value={whyBuyTab} onChange={handleWhyBuyChange} centered sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'primary.main', // Color of the indicator (underline)
        },
        '& .MuiTab-root': {
          color: 'gray', // Default tab color (inactive)
        },
        '& .Mui-selected': {
          color: "primary.light", // Active tab color
        },
      }}>
          <Tab label="Business Development"  />
          <Tab label="Parties" />
          <Tab label="Thank Yous" />
        </Tabs>
        {whyBuyTab === 0 && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="secondary.main">
              Business Development
            </Typography>
            <Typography variant="body1">
              Enhance your business relationships with our delightful baked
              goods. Tangible: Freshly baked treats, customizable packaging,
              prompt delivery. Intangible: Strengthened client relationships,
              increased employee morale, a touch of warmth and appreciation in
              your business dealings.
            </Typography>
          </Box>
        )}
        {whyBuyTab === 1 && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="secondary.main">
              Parties
            </Typography>
            <Typography variant="body1">
              Make your parties unforgettable with our delicious treats.
              Tangible: Variety of flavors, attractive presentation, reliable
              delivery. Intangible: Memorable experiences, satisfied guests, a
              personal touch to your events.
            </Typography>
          </Box>
        )}
        {whyBuyTab === 2 && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="secondary.main">
              Thank Yous
            </Typography>
            <Typography variant="body1">
              Express your gratitude with our heartfelt baked goods. Tangible:
              Handcrafted treats, elegant packaging, personalized notes.
              Intangible: Genuine appreciation, lasting impressions,
              strengthened relationships.
            </Typography>
          </Box>
        )}
      </Box>

      <Divider />
      <Box sx={{ p: 2 }}></Box>

      {/* How It Works Section */}
      <Box my={6} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom color="text.primary">
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={3}>
            <Box style={{ padding: "20px" }}>
              <ShoppingCart style={{ fontSize: 40, color: "#00BFA5" }} />
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                color="text.primary"
              >
                Make Your Order
              </Typography>
              <Typography>
                Choose your favorite treats and place your order through our
                easy-to-use online system.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={1}>
            <ArrowForward style={{ fontSize: 40, color: "#B2F0E3" }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box style={{ padding: "20px" }}>
              <BakeryDining style={{ fontSize: 40, color: "#00BFA5" }} />
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                color="text.primary"
              >
                We Make the Products
              </Typography>
              <Typography>
                Our skilled bakers get to work, creating your treats with the
                freshest ingredients and a lot of love.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={1}>
            <ArrowForward style={{ fontSize: 40, color: "#B2F0E3" }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box style={{ padding: "20px" }}>
              <LocalShipping style={{ fontSize: 40, color: "#00BFA5" }} />
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                color="text.primary"
              >
                We Deliver
              </Typography>
              <Typography>
                Sit back and relax as we deliver your freshly baked goods right
                to your doorstep.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider />
      <Box sx={{ p: 2 }}></Box>

      {/* Product Sourcing Section */}
      <Box my={6}>
        <Typography variant="h4" component="h2" gutterBottom color="text.primary">
          Our Ingredients and Sourcing
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          At Wholesome Bakes, we pride ourselves on using the finest ingredients
          sourced from high-quality vendors. Each of our products is crafted
          with care, ensuring that every bite is as delicious as the last.
        </Typography>
        <Button
          variant="contained"
          
          
          onClick={() => navigate('/menu')}
          style={{ marginTop: '20px'}}
        >
          Menu for Full Details
        </Button>
        
      </Box>

      <Divider />
      <Box sx={{ p: 2 }}></Box>

      {/* FAQ Section */}
      <Box my={6}>
        <Typography variant="h4" component="h2" gutterBottom color="text.primary">
          Frequently Asked Questions
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">
              What are your delivery options?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer local delivery within specific zip codes and also provide
              a local pickup option.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">How do I place an order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can place an order through our online system by selecting your
              desired products and completing the checkout process.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Do you offer any discounts?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we offer discounts and promotions throughout the year. Be
              sure to sign up for our newsletter to stay updated on the latest
              offers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Can I customize my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At this time, we do not offer customizations for individual
              orders, but we do provide a variety of options to choose from.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Pre-Order Popup */}
      <Dialog open={popupOpen} onClose={handleClosePopup}>
        <DialogTitle>Pre-Order Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Our website will go live in July 2024, but we will not start
            fulfilling any orders until the first of August 2024. No card
            information will be taken until the orders start being fulfilled.
            You will be able to place your order and pick a delivery date as
            part of the checkout process.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Yes, I understand
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Home;
