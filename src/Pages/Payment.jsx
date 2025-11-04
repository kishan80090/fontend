import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault(); // form reload hone se roke

    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    if (method === "card") {
      alert("Payment Successful by Card! 🎉");
    } else if (method === "upi") {
      alert("UPI Payment Successful! 🎉");
    } else {
      alert("Cash on Delivery Selected! 🎉");
    }

    navigate("/"); // redirect home
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <p>Select your payment method:</p>

      {/* ✅ Form added for required validation */}
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
            <input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              required
            />
            <div className="card-extra">
              <input type="text" placeholder="MM/YY" maxLength="5" required />
              <input
                type="password"
                placeholder="CVV"
                maxLength="3"
                required
              />
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

        {/* ✅ submit button */}
        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
