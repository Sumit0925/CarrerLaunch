import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./assets/Signup.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [rollno, setRollno] = useState();
  const [branch, setBranch] = useState();
  const [password, setPassword] = useState();
  // const isAdmin = false;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        rollno,
        branch,
        password,
      })
      .then((res) => {
        if (res.data.status == "ok") {
          if (res.data.role == "admin") {
            navigate("/dashboard");
          } else {
            navigate("/login");
          }
        } else {
          alert("your roll number does not exist");
          setName("");
          setEmail("");
          setBranch("");
          setRollno("");
          setPassword("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-wrapper">
      <div className="container2">
        <div className="register-heading-layout">
          <h2 className="register-heading">Register Here!</h2>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="subfield register-name">
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="username"
              id="username"
              required
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>
          <div className="subfield register-input">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="subfield register-input">
            <label htmlFor="rollno">
              <strong>College Id</strong>
            </label>
            <input
              type="text"
              placeholder="Enter College Id"
              autoComplete="off"
              name="rollno"
              id="rollno"
              required
              onChange={(e) => setRollno(e.target.value)}
            />
          </div>
          <div className="subfield">
            <strong>Branch</strong>
            <div className="radio-buttons">
              <div className="radio-individual">
                <input
                type="radio"
                id="CSE"
                name="branch"
                value="CSE"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="CSE">CSE</label>
              </div>
              
              <div className="radio-individual">
                <input
                type="radio"
                id="Civil"
                name="branch"
                value="Civil"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="Civil">Civil</label>
              </div>
              
              <div className="radio-individual">
                <input
                type="radio"
                id="Mechanical"
                name="branch"
                value="Mechanical"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="Mechanical">Mechanical</label>
              </div>
              
              <div className="radio-individual">
                <input
                type="radio"
                id="Electical"
                name="branch"
                value="Electriccal"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="Electrical">Electrical</label>
              </div>
              
              <div className="radio-individual">
                 <input
                type="radio"
                id="E&C"
                name="branch"
                value="E&C"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="E&C">E&C</label>
              </div>
      
             
              
            </div>
          </div>
          <div className="subfield register-password">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">
            <div className="register-button pressed">Register</div>
          </button>
        </form>
        <div className="register-to-login">
          <p>Already have an Account?</p>
          <Link to="/login" className="pressed">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
