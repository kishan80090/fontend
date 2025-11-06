import React from 'react'
import { Link } from 'react-router-dom'; // Link import kiya
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

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
              <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="" />
          </div>
      </div>

      <div className="footer-copyright">
          <hr/>
          <p>Copyright @ 2025 - All Right Reserved</p>
          <p>Name : Kishan Kumar Kannaujiya</p>
          <p>Email : kishank13857@gmail.com</p>
          <p>Mobile : +91 9559717200</p>
      </div>
    </div>
  )
}

export default Footer;
