import React, { useState } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [method, setMethod] = useState("");
  const [showFlower, setShowFlower] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!method) {
      alert("Please select a payment method!");
      return;
    }
    setShowFlower(true);

    setTimeout(() => {
      alert(
        method === "card"
          ? "Payment Successful by Card! 🎉"
          : method === "upi"
          ? "UPI Payment Successful! 🎉"
          : "Cash on Delivery Selected! 🎉"
      );
    }, 2500);
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <p>Select your payment method:</p>

      <form className="payment-options" onSubmit={handlePayment}>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={(e) => setMethod(e.target.value)}
          />
          💳 Credit / Debit Card
        </label>

        {method === "card" && (
          <div className="card-details">
            <input type="text" placeholder="Cardholder Name" required />
            <input type="text" placeholder="Card Number" maxLength="16" required />
            <div className="card-extra">
              <input type="text" placeholder="MM/YY" maxLength="5" required />
              <input type="password" placeholder="CVV" maxLength="3" required />
            </div>
          </div>
        )}

        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={(e) => setMethod(e.target.value)}
          />
          📱 UPI / Google Pay / PhonePe
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={(e) => setMethod(e.target.value)}
          />
          💵 Cash on Delivery
        </label>

        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>

      
      {showFlower && (
        <div className="flower-popup">
          <img
            src="https://kishan80090.github.io/jsondata/pictures/right.png"
            alt="Flower"
            className="flower-img"
          />
          <h2>Order Placed Successfully! 🌸</h2>

          
          <Link to="/location">
            <button className="track-location-btn"><b>Track Location</b></button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Payment;
