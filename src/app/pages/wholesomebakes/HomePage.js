// src/pages/HomePage.js
import React from 'react';
import GuestHeader from '../../wholesomebakes/GuestHeader';
import Footer from '../../wholesomebakes/Footer';
import Home from '../../wholesomebakes/Home';

const HomePage = ({ addToCart, cartCount }) => {
  return (
    <div>
      <GuestHeader cartCount={cartCount} />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default HomePage;
