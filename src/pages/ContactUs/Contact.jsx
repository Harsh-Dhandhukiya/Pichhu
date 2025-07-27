// Contact component for handling user inquiries and feedback
import React from "react";
// Import CSS styles for this component
import "./contact.css";
// Import the contact page image
import contactImage from "./contact-us.jpg";

/**
 * Contact component that renders a contact form and image
 * @returns {JSX.Element} The rendered contact page
 */
export default function Contact() {
  return (
    <div className="contact">
      {/* Left section containing the customer service image */}
      <div className="contactLeft">
        <img
          src={contactImage}
          alt="Customer Service"
          className="contactImage"
        />
      </div>
      
      {/* Right section containing the contact form */}
      <div className="contactRight">
        <h2>Contact Us</h2>
        {/* Contact form for user submissions */}
        <form className="contactForm">
          {/* Input field for user's name */}
          <input type="text" placeholder="Your Name" required />
          
          {/* Input field for user's email with validation */}
          <input type="email" placeholder="Your Email" required />
          
          {/* Text area for user's message */}
          <textarea placeholder="Your Message" rows="5" required></textarea>
          
          {/* Submit button to send the form */}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
