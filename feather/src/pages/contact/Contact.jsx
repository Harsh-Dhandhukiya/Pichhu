// src/pages/contact/Contact.jsx
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactLeft">
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740"
          alt="Customer Service"
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
