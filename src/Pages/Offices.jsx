import React from 'react';
import './Offices.css';

const Offices = () => {
  return (
    <div className="offices-page">
      {/* Hero Section */}
      <section className="offices-hero">
        <h1>Our Offices</h1>
        <p>We have multiple locations to serve you better. Visit us at any of our stores!</p>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="office-card">
          <h2>New Delhi</h2>
          <p>123 Fashion Street, Connaught Place, New Delhi</p>
        </div>
        <div className="office-card">
          <h2>Mumbai</h2>
          <p>456 Style Avenue, Bandra West, Mumbai</p>
        </div>
        <div className="office-card">
          <h2>Bengaluru</h2>
          <p>789 Trendy Lane, MG Road, Bengaluru</p>
        </div>
        <div className="office-card">
          <h2>Chennai</h2>
          <p>101 Trend Street, Anna Nagar, Chennai</p>
        </div>
        <div className="office-card">
          <h2>Kolkata</h2>
          <p>202 Fashion Boulevard, Park Street, Kolkata</p>
        </div>
        <div className="office-card">
          <h2>Hyderabad</h2>
          <p>303 Style Road, Banjara Hills, Hyderabad</p>
        </div>
        <div className="office-card">
          <h2>Noida</h2>
          <p>404 Modern Avenue, Sector 62, Noida</p>
        </div>
        <div className="office-card">
          <h2>Gurugram</h2>
          <p>505 Corporate Plaza, Sector 27, Gurugram, India</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="office-contact">
        <h2>Contact Us</h2>
        <p>Email: support@shopper.com</p>
        <p>Phone: +91 9559717200</p>
      </section>
    </div>
  )
}

export default Offices;
