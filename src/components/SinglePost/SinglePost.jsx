// Import the CSS styles for this component
import "./singlePost.css";

/**
 * SinglePost component that displays a full blog post with its details
 * @returns {JSX.Element} The rendered single post view
 */
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* Featured image for the blog post */}
        <img
          className="singlePostImg"
          src="https://images8.alphacoders.com/138/1386891.jpg"
          alt="Solo Leveling featured image"
        />
        {/* Post title with edit controls */}
        <h1 className="singlePostTitle">
          How many Levels Sung Jin-woo could reach in Solo Leveling!?
            {/* Edit and delete controls for post author */}
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
        </h1>
        {/* Post metadata section */}
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Harsh_H</b></span>
            <span className="singlePostDate">1 days ago</span>
        </div>
        {/* Main post content */}
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Generating random paragraphs can be an excellent way for 
            riters to get their creative flow going at the beginning of the day. The writer has no idea
            what topic the random paragraph will be about when it appears. This forces the writer to use
            creativity to complete one of three common writing challenges. The writer can use the par
            agraph as the first one of a short story and build upon it. A second option is to use the
            random paragraph somewhere in a short story they create. The third option is to have the 
            paragraph be the ending paragraph in a short story. No matter which of these challenges is 
            undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, provident. Quod, quidem. Generating random paragraphs can be an excellent way for 
            riters to get their creative flow going at the beginning of the day. The writer has no idea
            what topic the random paragraph will be about when it appears. This forces the writer to use
            creativity to complete one of three common writing challenges. The writer can use the par
            agraph as the first one of a short story and build upon it. A second option is to use the
            random paragraph somewhere in a short story they create. The third option is to have the 
            paragraph be the ending paragraph in a short story. No matter which of these challenges is 
            undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
        </p>
      </div>
    </div>
  )
}
