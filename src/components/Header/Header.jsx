// Import the CSS styles for this component
import './header.css'

/**
 * Header component that displays the blog title and banner image
 * @returns {JSX.Element} The rendered header section
 */
export default function Header() {
  return (
    <div className='header'>
        {/* Container for the header titles */}
        <div className="headerTitles">
            {/* Small title displayed above the main title */}
            <span className='headerTitleSm'>Pichhu</span>
            {/* Large main title of the blog */}
            <span className='headerTitleLg'>Blog</span>
        </div>
        {/* Banner image for the header */}
        <img className='headerImg' 
        src='https://marketplace.canva.com/EAFvMGz3r2I/1/0/1600w/canva-pink-blue-anime-illustrative-bright-peaceful-collage-desktop-wallpaper-fNLOhCK5MLY.jpg' 
        alt='Blog header banner' />
    </div>
  )
}
