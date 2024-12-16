import React from "react";
import "../assets/Faculty.css"
import Phone_logo from "../../assets/telephone1.png"
import Email_logo from "../../assets/mail1.png"
import Avatar_Img from "../../assets/person.png"

function FacultyCard(props) {
  return (
    <>

      <div className="main-section">
        <div className="card">
          <div className="top">
            <div className="tip-details">
              <h2 className="name">{props.name}</h2>
              <div className="faculty-intro"><h4>{props.intro}</h4></div>
            </div>
            <img className="circle-img" src={props.img} alt="avatar_img" />
          </div>
          <div className="bottom">
            <div className="info phone">
              <img src={Phone_logo} alt="phone-logo" />
              <h3>{props.tel}</h3>
            </div>
            <div className="info email">
              <img src={Email_logo} alt="email-logo" />
              <h3><a href={props.sendMail} target='_blank'>{props.email}</a></h3>
            </div>
          </div>
        </div>
      </div>


    </>


  );
}

export default FacultyCard;