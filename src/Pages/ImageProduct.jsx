import React, { useContext, useState } from "react";
import "./ImageProduct.css";
import imageProducts from "../Components/Assets/imageproduct";
import { ShopContext } from "../Context/ShopContext";

const ImageProduct = () => {
  const { addToCart } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Add to cart function
  const handleAddToCart = (product) => {
    addToCart(product.id);
    alert(`${product.name} Sure Add To Cart`);
    setSelectedProduct(null);
  };

  return (
    <div className="image-products">
      <h1>Explore Our Exclusive Collection</h1>
      <p>Discover the latest trends across Men, Women, and Kids categories</p>

      {/* ✅ Product Grid */}
      <div className="product-grid">
        {imageProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="prices">
              <span className="new-price">₹{product.new_price}</span>
              <span className="old-price">₹{product.old_price}</span>
            </div>

            {/* ✅ Size Options */}
            <div className="size-options">
              <p>Available Sizes:</p>
              <div className="size-buttons">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} className="size-btn" disabled>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-buttons">
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button onClick={() => setSelectedProduct(product)}>Quick View</button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Quick View Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p>
              Stylish and comfortable — perfect for daily wear. 
              High-quality fabric ensures a great fit and long-lasting comfort.
            </p>

            <div className="prices">
              <span className="new-price">₹{selectedProduct.new_price}</span>
              <span className="old-price">₹{selectedProduct.old_price}</span>
            </div>

            <div className="size-options">
              <p>Available Sizes:</p>
              <div className="size-buttons">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} className="size-btn" disabled>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-buttons">
              <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
              <button className="close-btn" onClick={() => setSelectedProduct(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageProduct;
