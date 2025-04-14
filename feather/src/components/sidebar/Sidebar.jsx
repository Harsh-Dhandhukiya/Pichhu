// Import the CSS styles for this component
import "./sidebar.css";

/**
 * Sidebar component that displays additional content and navigation options
 * @returns {JSX.Element} The rendered sidebar with about, categories, and social sections
 */
export default function Sidebar() {
  return (
    <div className="sidebar">
        {/* About Me section with profile image and bio */}
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92c32d69-e982-4ae5-8f44-2ee1e253ae32/dat91jf-37236d06-7dd4-43ee-8310-31d5f954f8c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyYzMyZDY5LWU5ODItNGFlNS04ZjQ0LTJlZTFlMjUzYWUzMlwvZGF0OTFqZi0zNzIzNmQwNi03ZGQ0LTQzZWUtODMxMC0zMWQ1Zjk1NGY4YzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qn6EYYY45UH_qc0jv-QAiaSjXxoPiD7cSAk57v0FH40" 
            alt="Profile avatar"/>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        
        {/* Categories section with blog post categories */}
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        
        {/* Social media section with icon links */}
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  );
}