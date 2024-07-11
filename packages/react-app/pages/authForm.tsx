// src/components/AuthForm.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './login';
import RegisterForm from './register';
import SellerProductsForm from './sellerProducts';
import Home from './landingPage';

const AuthForm = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-teal-100 px-4">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
          <div className="bg-black-500 p-8 flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">Information</h2>
            <p className="mb-4 text-white">
            Our Sneaker store offers a prime platform for showcasing your athletic footwear. 
            Partner with us to reach a diverse customer base seeking top brands like Nike, Adidas, and Puma. Benefit from our high foot traffic, extensive marketing, and reputation for quality and fashion-forward selections. 
            Boost your brand's visibility and sales in the competitive sneaker market with us.
            </p>
            <Link to="/login">
              <button className="bg-white text-black-500 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200">
                Have An Account
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/sellerProducts" element={<SellerProductsForm />} />
              <Route path="/" element={<Home />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AuthForm;
