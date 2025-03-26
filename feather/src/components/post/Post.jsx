import "./post.css";

export default function Post() {
  return (
    <div className='post'>
      <img 
        className='postImage'
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
        alt=''
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr className="postDivider" />
            <span className="postDate">
                1 Hour ago
            </span> 
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
