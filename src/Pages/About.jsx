import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      
      <section className="about-hero">
        <h1>About Shopper</h1>
        <p>We are passionate about bringing the best fashion experience to our customers. Discover our story, mission, and vision.</p>
      </section>

      
      <section className="about-mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>To provide high-quality fashion products with exceptional customer service and convenience.</p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>To become the most trusted online fashion platform globally, loved by every shopper.</p>
        </div>
      </section>

      
      <section className="brand-story">
        <h2>Our Story</h2>
        <p>Started in 2025, Shopper has been committed to delivering the latest trends in Men, Women, and Kids fashion. We believe shopping should be easy, fun, and stylish.</p>
      </section>
    </div>
  )
}

export default About;
