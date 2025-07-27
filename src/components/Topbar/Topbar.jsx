// Import React library for component creation
import React from "react";
// Import Link for navigation and useNavigate hook for programmatic navigation
import { Link, useNavigate } from "react-router-dom";
// Import component-specific styles
import "./topbar.css";

/**
 * Topbar component - Main navigation bar displayed at the top of all pages
 * @returns {JSX.Element} The rendered navigation bar
 */
export default function Topbar() {
  // User authentication state (hardcoded for development)
  const user = true; // Keep this as true
  // Hook for programmatic navigation
  const navigate = useNavigate();
  
  /**
   * Handles user logout action
   * Redirects to login page
   */
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="top">
      {/* Left section - Social media icons */}
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      
      {/* Center section - Main navigation links */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          {/* Conditional rendering of logout option for authenticated users */}
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      
      {/* Right section - User profile or authentication links */}
      <div className="topRight">
        {/* Conditional rendering based on authentication state */}
        {user ? (
          // User profile image for authenticated users
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="User profile"
          />
        ) : (
          // Login/Register links for unauthenticated users
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        {/* Search icon */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}