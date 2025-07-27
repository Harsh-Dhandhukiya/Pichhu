// Import the individual Post component
import Post from "../Post/Post";
// Import the CSS styles for this component
import "./posts.css";

/**
 * Posts component that renders a collection of blog post previews
 * This component serves as a container for multiple Post components
 * @returns {JSX.Element} A grid of post preview cards
 */
export default function Posts() {
  return (
    <div className='posts'>
        {/* Multiple Post components to display a grid of blog posts */}
        {/* In a real application, these would be generated from data */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
