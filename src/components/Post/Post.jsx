// Import the CSS styles for this component
import "./post.css";

/**
 * Post component that displays a blog post preview
 * @returns {JSX.Element} The rendered post preview card
 */
export default function Post() {
  return (
    <div className='post'>
      {/* Featured image for the post */}
      <img 
        className='postImage'
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
        alt='Post featured image'
      />

      <div className="postInfo">
        {/* Post categories section */}
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        {/* Post title */}
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        {/* Horizontal divider between title and date */}
        <hr className="postDivider" />
        {/* Post publication date */}
        <span className="postDate">
            1 Hour ago
        </span> 
        {/* Post description/excerpt */}
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
            dolor at consectetur laoreet, sapien velit fermentum ex, ac pharetra
            turpis enim euismod ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
            dolor at consectetur laoreet, sapien velit fermentum ex, ac pharetra
            turpis enim euismod ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
            dolor at consectetur laoreet, sapien velit fermentum ex, ac pharetra
            turpis enim euismod ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
            dolor at consectetur laoreet, sapien velit fermentum ex, ac pharetra
            turpis enim euismod ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
            dolor at consectetur laoreet, sapien velit fermentum ex, ac pharetra
            turpis enim euismod ipsum.
        </p>
      </div>
    </div>
  )
}
