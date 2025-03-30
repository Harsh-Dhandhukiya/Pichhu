import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Harsh Dhandhukiya" />
          <label>Email</label>
          <input type="email" placeholder="harsh22bit144@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
