import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
// import hero_image from '../Assets/hero_image.png'
import shopper from '../Assets/shopper.mp4';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate(); 

  const goToLatestCollection = () => {
    navigate("/latestcollection"); 
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={goToLatestCollection}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        {/* <img src={hero_image} alt="hero" /> */}

       <video src={shopper} autoPlay muted loop playsInline className="hero-video"></video>

      </div>
      
    </div>
  )
}

export default Hero;
