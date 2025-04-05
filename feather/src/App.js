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

function App() {
  const user = false;
  return (
      <div className="app">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
  );
}

export default App;