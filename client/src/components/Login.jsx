import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  //   const handleLogout = () => {
  //     axios
  //       .post("http://localhost:3001/logout")
  //       .then((res) => {
  //         location.reload(true);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log("login: " + res.data);
        if (res.data.Status === "success") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);
          if (res.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/posts");
          }
        }
      })
      .catch((err) => console.log(err));
  };


  //*If already logged In
  const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  if(isAuthenticated()){
    return <Navigate to={"/"}/>
  }

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-heading-layout">
          <h2 className="login-heading">Login!</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input input">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              autoComplete="off"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
          </div>
          <div className="login-password password">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize="none"
            />
          </div>
          <button type="submit">
            <div className="login-button pressed">Login</div>
          </button>
        </form>
        <div className="login-to-register">
          <p>Don't have Account?</p>
          <Link to="/register" className="pressed">
            <span>Register Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
