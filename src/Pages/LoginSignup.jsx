import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    if (isLogin) {
      // ✅ Demo login alert only (no backend)
      alert(`Welcome back, ${formData.email}!`);
    } else {
      // ✅ Signup request
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div className="loginsignup-fields">
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Continue"}
        </button>

        <p className="loginsignup-login">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up here</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login here</span>
            </>
          )}
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
