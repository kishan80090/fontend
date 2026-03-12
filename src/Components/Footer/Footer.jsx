import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.jpg'
const Footer = () => {
  return (
    <div className='footer' >
      <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>SHOPPER</p>
      </div>
      <ul className='footer-links' >
        <li><Link to="/company" style={{color:"red"}}>Company</Link></li>
        <li><Link to="/all-products" style={{color:"red"}}>Products</Link></li>
        <li><Link to="/offices" style={{color:"red"}}>Offices</Link></li>
        <li><Link to="/about" style={{color:"red"}}>About</Link></li>
        <li><Link to="/contact" style={{color:"red"}}>Contact</Link></li>
      </ul>

      <div className="footer-social-icon">
          <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
  <img src={facebook_icon} alt="Facebook" />
</div>
          <div className="footer-icons-container">
              <img src={pintester_icon} alt="" />
          </div>
         <div className="footer-icons-container">
    <a href="https://wa.me/919559717200?text=Hello%20I%20want%20to%20know%20about%20your%20products">
    <img src={whatsapp_icon} alt="WhatsApp" />
  </a>
</div>
      </div>
      <div className="footer-copyright">
          <hr/>
        <p>Help Center: support@fashionhub.com</p>
        <p>Call Us: +91 9559717200</p>
      </div>
    </div>
  )
}
export default Footer;
