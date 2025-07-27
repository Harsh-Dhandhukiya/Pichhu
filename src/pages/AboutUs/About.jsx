// Import React library for component creation
import React from 'react';
// Import component-specific styles
import "./about.css";

/**
 * About page component that displays personal information and profile
 * @returns {JSX.Element} The rendered about page
 */
export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        {/* Left column with text content */}
        <div className="aboutLeft">
          {/* Name and pronunciation section */}
          <div className="aboutInfo">
            <h1 className="aboutName">
              Tamara<br />Sredojevic
            </h1>
            <p className="aboutPronunciation">(yes, it's a mouthful)</p>
          </div>
          {/* Biography section */}
          <div className="aboutBio">
            <p>I'm a freelance UX designer<br />specialising in accessibility and<br />neuroinclusive design.</p>
          </div>
          {/* Social media icons */}
          <div className="aboutSocial">
            <i className="aboutSocialIcon fa-solid fa-circle-dot"></i>
            <i className="aboutSocialIcon fa-solid fa-briefcase"></i>
            <i className="aboutSocialIcon fa-brands fa-x-twitter"></i>
            <i className="aboutSocialIcon fa-brands fa-linkedin"></i>
            <i className="aboutSocialIcon fa-solid fa-at"></i>
          </div>
        </div>
        {/* Right column with profile image */}
        <div className="aboutRight">
          <div className="profileContainer">
            <div className="profileImgContainer">
              <img 
                className="aboutProfileImg" 
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Blog link positioned absolutely on the page */}
      <div className="blogLink">
        <a href="/blog" className="link">→ BLOG</a>
      </div>
    </div>
  );
}