import React from 'react';
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutLeft">
          <div className="aboutInfo">
            <h1 className="aboutName">
              Tamara<br />Sredojevic
            </h1>
            <p className="aboutPronunciation">(yes, it's a mouthful)</p>
          </div>
          <div className="aboutBio">
            <p>I'm a freelance UX designer<br />specialising in accessibility and<br />neuroinclusive design.</p>
          </div>
          <div className="aboutSocial">
            <i className="aboutSocialIcon fa-solid fa-circle-dot"></i>
            <i className="aboutSocialIcon fa-solid fa-briefcase"></i>
            <i className="aboutSocialIcon fa-brands fa-x-twitter"></i>
            <i className="aboutSocialIcon fa-brands fa-linkedin"></i>
            <i className="aboutSocialIcon fa-solid fa-at"></i>
          </div>
        </div>
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
      <div className="blogLink">
        <a href="/blog" className="link">→ BLOG</a>
      </div>
    </div>
  );
}