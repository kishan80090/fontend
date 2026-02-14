import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

import all_product from '../Assets/all_product'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
    }
    
const navigate = useNavigate()
const [search, setSearch] = useState("")
const [results, setResults] = useState([])
const handleSearch = (e) => {
  const value = e.target.value
  setSearch(value)

  if (value.trim() === "") {
    setResults([])
    return
  }

  const filtered = all_product.filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  )

  setResults(filtered.slice(0, 5))
}

    
  return (
    <div className='navbar' >
        <div className="nav-logo">
<Link to='/'>  <img src={logo} alt=''/></Link>
<Link to="/" style={{ textDecoration: "none",}}>
<p>SHOPPER</p></Link>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
<ul ref={menuRef} className='nav-menu'>

<li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></> }</li>
<li onClick={()=>{setMenu("mens")}} ><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></> }</li>
<li onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration:'none'}} to='/womens' >Women</Link>{menu==="womens"?<hr/>:<></> }</li>
<li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></> }</li>

 <div className="border-wrap">
  <input
    className="search"
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={handleSearch}
  />
</div>

{results.length > 0 && (
  <div className="search-results">
    {results.map(item => (
      <div
        key={item.id}
        className="search-item"
        onClick={() => {navigate(`/product/${item.id}`)
          setSearch("")
          setResults([])
        }}
      >
        <img src={item.image} alt="" />
        <span>{item.name}</span>
      </div>
    ))}
  </div>
)}

</ul>
<div className="nav-login-cart">
    <Link to='/login' ><button>Login</button></Link>
<Link to='/cart' ><img src={cart_icon} alt="" /></Link>
<div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
    </div>
  )
}
export default Navbar;
