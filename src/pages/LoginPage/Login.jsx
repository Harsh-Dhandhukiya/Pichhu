// Import routing components for navigation
import { Link, useNavigate } from "react-router-dom";
// Import state management hook
import { useState } from "react";
// Import component-specific styles
import "./login.css";

/**
 * Login component that handles user authentication
 * @returns {JSX.Element} The rendered login form
 */
export default function Login() {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State for email input and validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  /**
   * Redirects user to registration page
   */
  const handleRegisterClick = () => {
    navigate("/register");
  };

  /**
   * Validates email format using regex
   * @param {string} email - The email to validate
   * @returns {boolean} True if email is valid
   */
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  /**
   * Handles email input changes and validates in real-time
   * @param {Event} e - The input change event
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value && !validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  /**
   * Handles form submission
   * @param {Event} e - The form submit event
   */
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
      {/* Page title */}
      <span className="loginTitle">Login</span>
      {/* Login form with validation */}
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
        {/* Conditional error message display */}
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
      {/* Registration button */}
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