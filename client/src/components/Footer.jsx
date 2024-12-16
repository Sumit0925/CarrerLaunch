import React from 'react'
import "./assets/Footer.css"

function Footer() {
  return (
    
    <>
    <footer>
  <div className="waves">
    <div className="wave" id="wave1"></div>
    <div className="wave" id="wave2"></div>
    <div className="wave" id="wave3"></div>
    <div className="wave" id="wave4"></div>
  </div>
  <ul className="social_icon">
    <li><a href="https://www.facebook.com/placementcell.gcet/"><ion-icon name="logo-facebook"></ion-icon></a></li>
    <li><a href="https://twitter.com/gcetjammu"><ion-icon name="logo-twitter"></ion-icon></a></li>
    {/* <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li> */}
    {/* <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li> */}
  </ul>

  <ul className="menu">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    {/* <li><a href="#">Services</a></li> */}
    {/* <li><a href="#">Team</a></li> */}
    <li><a href="/contact-us">Contact Us</a></li>
  </ul>
  <p className="copyright"> copyright@2024 </p>
</footer>
    </>
  )
}

export default Footer