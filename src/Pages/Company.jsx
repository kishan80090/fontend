import React from 'react';
import './Company.css';

const Company = () => {
  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="company-hero">
        <h1>About Our Company</h1>
        <p>We are committed to delivering the best shopping experience for our customers.</p>
      </section>

      
      <section className="company-mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>To provide quality products with excellent customer service and satisfaction.</p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>To become the most trusted online shopping platform globally.</p>
        </div>
      </section>

      
      <section className="company-team">
        <h2>Meet Our Team</h2>
        <img src="https://kishan80090.github.io/jsondata/pictures/kishan.png" alt=".." />
        <div className="team-members">
          <div className="team-card">
        <h3><b style={{color:"black"}} >Kishan Kumar</b></h3>
          </div>
          <div className="team-card">
            <p><b style={{color:"black"}} >🖂 kishank13857@gmail.com</b></p>
          </div>
          <div className="team-card">
            <p ><b style={{color:"black"}} >📞 𝑾𝒉𝒂𝒕𝒔𝑨pp +91 9559717200</b></p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Company;
