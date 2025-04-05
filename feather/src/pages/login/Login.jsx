import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegisterClick = () => {
    navigate("/register");
  };

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
    // Continue with login process
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          className="loginInput" 
          placeholder="Enter your email" 
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <span className="errorMessage">{emailError}</span>}
        <label>Password</label>
        <input 
          type="password" 
          className="loginInput" 
          placeholder="Enter your password" 
          required
        />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button 
        className="loginRegisterButton" 
        type="button" 
        onClick={handleRegisterClick}
      >
        Register
      </button>
    </div>
  );
}