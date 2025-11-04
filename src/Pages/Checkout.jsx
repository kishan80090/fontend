import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // ✅ Place order click handler
  const handlePlaceOrder = (e) => {
    e.preventDefault(); // form refresh na ho
    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Complete your order below:</p>

      {/* ✅ form tag add kiya bas */}
      <form className="checkout-form" onSubmit={handlePlaceOrder}>
        <h3>Shipping Details</h3>

        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Pincode" required />
        <input type="text" placeholder="Phone Number" required />

        {/* ✅ Button form ke andar rakha */}
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
