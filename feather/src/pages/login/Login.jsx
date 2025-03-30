import "./login.css";
import { Link } from "react-router-dom"; 

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your Email"/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Password"/>
            <button className="loginButton">Login</button>
            <Link to="/register">
              <button className="loginRegisterButton">Back</button>
            </Link>
        </form>
    </div>
  )
}