import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Username"/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email"/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Password"/>
            <button className="registerButton">Register</button>
            <Link to="/login">
              <button className="registerLoginButton">Login</button>
            </Link>
        </form>
    </div>
  )
}
