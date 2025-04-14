// Import component-specific styles
import "./write.css";

/**
 * Write component that provides a form for creating new blog posts
 * @returns {JSX.Element} The rendered post creation page
 */
export default function Write() {
  return (
    <div className="write">
        {/* Featured image preview */}
        <img className="writeImg" src="https://m.media-amazon.com/images/M/MV5BMmRmZWFkZGMtYTc5Mi00OWNmLTkzODQtYzRkOGVmZGE1MWRlXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg" alt="Post preview" />
        {/* Post creation form */}
        <form className="writeForm">
            {/* Title input group with file upload option */}
            <div className="writeFormGroup">
                {/* Custom file input trigger with plus icon */}
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                {/* Hidden actual file input */}
                <input type="file" id="fileInput" style={{display: "none"}}/>
                {/* Post title input field */}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            {/* Post content textarea */}
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            {/* Publish button */}
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
