import React from 'react'
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
<li style={{color:"red"}} >Company</li>
<li style={{color:"red"}} >Products</li>
<li style={{color:"red"}} >Offices</li>
<li style={{color:"red"}} >About</li>
<li style={{color:"red"}} >Contact</li>
</ul>
<div className="footer-social-icon">
    <di className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </di>
    <di className="footer-icons-container">
        <img src={pintester_icon} alt="" />
    </di>
    <di className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </di>
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