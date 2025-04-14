// Main navigation component that appears on all pages
import Topbar from "./components/topbar/Topbar";
// Homepage component that displays the main content and posts
import Home from "./pages/home/Home";
// User settings page component for profile management
import Settings from "./pages/settings/Settings";
// Component for displaying a single post with full details
import Single from "./pages/single/Single";
// Component for creating and submitting new posts
import Write from "./pages/write/Write";
// User authentication component for existing users
import Login from "./pages/login/Login"; 
// User registration component for new users
import Register from "./pages/register/Register";
// About page component with information about the site
import About from "./pages/About/About"; 
// Contact page component with contact information
import Contact from "./pages/contact/Contact"; 
// Router components from react-router-dom for navigation
import { Routes, Route } from "react-router-dom";

/**
 * Main App component that handles routing and layout
 * @returns {JSX.Element} The rendered application
 */
function App() {
  // User authentication state - true means user is logged in
  const user = true;
  
  return (
      <div className="app">
        {/* Navigation bar displayed on all pages */}
        <Topbar />
        
        {/* Route configuration for the application */}
        <Routes>
          {/* Home route - displays the main content */}
          <Route exact path="/" element={<Home />} />
          
          {/* Authentication routes with conditional rendering based on user state */}
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          
          {/* Protected routes that require authentication */}
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          
          {/* Content routes */}
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
  );
}

export default App;