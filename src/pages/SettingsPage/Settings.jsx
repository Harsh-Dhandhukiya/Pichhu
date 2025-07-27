// Import Sidebar component for the right column
import Sidebar from "../../components/Sidebar/Sidebar";
// Import component-specific styles
import "./settings.css";

/**
 * Settings component that allows users to update their account information
 * @returns {JSX.Element} The rendered settings page
 */
export default function Settings() {
  return (
    <div className="settings">
      {/* Main content area */}
      <div className="settingsWrapper">
        {/* Title section with update and delete options */}
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        {/* Settings form for user information */}
        <form className="settingsForm">
          {/* Profile picture section */}
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg"
              alt="User profile"
            />
            {/* Custom file input trigger */}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            {/* Hidden actual file input */}
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          {/* Username field */}
          <label>Username</label>
          <input type="text" placeholder="Harsh Dhandhukiya" />
          {/* Email field */}
          <label>Email</label>
          <input type="email" placeholder="harsh22bit144@gmail.com" />
          {/* Password field */}
          <label>Password</label>
          <input type="password" />
          {/* Submit button */}
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      {/* Sidebar with additional information */}
      <Sidebar />
    </div>
  );
}
