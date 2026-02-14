import React from 'react';
import './Offers.css';
// import exclusive_image from '../Assets/exclusive_image.png';
import { useNavigate } from 'react-router-dom';
import exclusive_video from '../Assets/exclusive_video.mp4';
const Offers = () => {
  const navigate = useNavigate();

  const handleCheckNow = () => {
    navigate('/imageproducts');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleCheckNow}>Check Now</button>
      </div>
      <div className="offers-right">
        {/* <img src={exclusive_image} alt="Exclusive Offer" /> */}

        <video src={exclusive_video} autoPlay muted loop playsInline className="exclusive-video">
          
        </video>
        <div className='h1' >
        <h1>OFFERS FOR YOU ⭐⭐⭐</h1>
        </div>
      </div>
    </div>
  );
};

export default Offers;
