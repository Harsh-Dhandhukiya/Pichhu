// src/pages/contact/Contact.jsx
import React from "react";
import "./contact.css";
import contactImage from "./contact-us.jpg"; // Import the image

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactLeft">
        <img
          src={contactImage} // Use the imported image
          alt="Customer Service"
          className="contactImage"
        />
      </div>
      <div className="contactRight">
        <h2>Contact Us</h2>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
