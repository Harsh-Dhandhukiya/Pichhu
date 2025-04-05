import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value && !validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    // Continue with registration process
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Enter your username" 
          required
        />
        <label>Email</label>
        <input 
          type="email" 
          className="registerInput" 
          placeholder="Enter your email" 
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <span className="errorMessage">{emailError}</span>}
        <label>Password</label>
        <input 
          type="password" 
          className="registerInput" 
          placeholder="Enter your password" 
          required
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button 
        className="registerLoginButton" 
        type="button" 
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}
