import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaFacebookMessenger, FaLock } from "react-icons/fa";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="login-container">
      <span className="title">Login</span>
      <span className="subtitle">Login your Account</span>
      <div className="formContainer">
        <div className="formWrapper">
          <form onSubmit={handleSubmit} className="form">
              <label htmlFor="email" className="label">Enter Email Address</label>
            <div className="form-group">
              <FaFacebookMessenger />
              <input type="email" placeholder="Enter Email" id="email" />
            </div>
            <label htmlFor="password" className="label">Enter your password</label>
            <div className="form-group">
              <FaLock />
              <input type="password" placeholder="Enter your password" id="password" />
            </div>
            <button className="form-btn">Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
