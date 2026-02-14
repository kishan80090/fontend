import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
// import men_banner from './Components/Assets/men_banner.png';
import women_banner from './Components/Assets/girls.mp4';
import kid_banner from './Components/Assets/kids.mp4';
import ImageProduct from "./Pages/ImageProduct"; 
import AllProducts from "./Pages/AllProducts"; 
import Checkout from "./Pages/Checkout"; 
import Payment from "./Pages/Payment"; 
import LatestCollection from './Pages/LatestCollection';
import Company from './Pages/Company';
import Offices from './Pages/Offices';
import About from './Pages/About';
import men_banner from './Components/Assets/banner.mp4';
import Contact from './Pages/Contact';
import LocationDemo from './Pages/LocationDemo';
import ScrollToTop from "./ScrollToTop"; 
function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/imageproducts' element={<ImageProduct />} />
          <Route path='/all-products' element={<AllProducts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/latestcollection" element={<LatestCollection />} />
          <Route path="/company" element={<Company />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<LocationDemo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
