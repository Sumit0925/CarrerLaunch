import React from "react";
import Gallery_Img from "../assets/image-gallery.png"
import ContactUs_Img from "../assets/contact-us.png";
import GcetLogo from "../assets/gcet_logo.png";
import About_Img from "../assets/about.png";
import Login_Img from "../assets/log-in.png";
import "./assets/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiLogOut } from "react-icons/bi";

function Navbar(props) {
  const navigate = useNavigate();

  // const isLoggedIn = !!token;
  const handleLogout = () => {
    axios
      .post("http://localhost:3001/logout")
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <nav className="sticky-nav">
      <div className="nav-text">
      <div className="svggg">
        {isAuthenticated() && (
          <GiHamburgerMenu className="pressed" onClick={props.ToggleSidebar} />
        )}
      </div>
        
        <Link to="/" className="pressed">
          <img src={GcetLogo} alt="gcet_logo" />
        </Link>
        <h1 className="">Career Launch</h1>
        {/* <h1 className="pressed"><a href="./index.html">Career Launch</a></h1> */}
      </div>

      <div id="nav-bar2">
      <Link className="nav-item pressed" to="/events">
          <img src={Gallery_Img} alt="event-img" />
          <h4>Gallery</h4>
        </Link>
        <Link className="nav-item pressed" to="/contact-us">
          <img src={ContactUs_Img} alt="contact_us-img" />
          <h4>Contact Us</h4>
        </Link>
        <Link className="nav-item pressed" to="/about">
          <img src={About_Img} alt="about-img" />
          <h4>About</h4>
        </Link>
        {isAuthenticated() && (
          <Link className="nav-item pressed" onClick={handleLogout}>
            {/* <img src={Login_Img} alt="login-img" /> */}
            <BiLogOut className="nav-icon"/>
            <h4>LogOut</h4>
          </Link>
        )}
        {!isAuthenticated() && (
          <Link className="nav-item pressed" to="/login">
            <img src={Login_Img} alt="login-img" />
            <h4>Login</h4>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
