// Import component-specific styles
import "./single.css"
// Import Sidebar component for the right column
import Sidebar from "../../components/sidebar/Sidebar";
// Import SinglePost component to display the full blog post
import SinglePost from "../../components/singlePost/SinglePost";

/**
 * Single page component that displays a full blog post with sidebar
 * This component serves as a container for the post content and sidebar
 * @returns {JSX.Element} The rendered single post page
 */
export default function Single() {
  return (
    <div className="single">
        {/* Main post content area */}
        <SinglePost/>
        {/* Sidebar with related information */}
        <Sidebar/>
    </div>
  )
}
