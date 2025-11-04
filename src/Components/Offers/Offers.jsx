import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import { useNavigate } from 'react-router-dom'; // ✅ add this line

const Offers = () => {
  const navigate = useNavigate(); // ✅ navigation function

  const handleCheckNow = () => {
    navigate('/imageproducts'); // ✅ ye route tumhare App.js me defined hai
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleCheckNow}>Check Now</button> {/* ✅ navigation added */}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
