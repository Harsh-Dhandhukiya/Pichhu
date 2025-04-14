// Import React library for component creation
import React from 'react';
// Import Header component for the top banner section
import Header from "../../components/header/Header";
// Import Posts component to display blog post previews
import Posts from "../../components/posts/Posts";
// Import Sidebar component for additional navigation and information
import Sidebar from "../../components/sidebar/Sidebar";
// Import component-specific styles
import "./home.css";

/**
 * Home page component that serves as the main landing page
 * Displays the header banner, blog posts, and sidebar
 * @returns {JSX.Element} The rendered home page
 */
export default function Home() {
  return (
    <>
      {/* Header banner with title and image */}
      <Header />
      {/* Main content area with flex layout */}
      <div className="home">
        {/* Blog posts grid section */}
        <Posts />
        {/* Sidebar with about, categories, and social links */}
        <Sidebar />
      </div>
    </>
  );
}
