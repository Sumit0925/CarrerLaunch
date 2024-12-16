import React from 'react'
import "./assets/ContactUs.css"
import Shape_Img from "../assets/shape.png"
import Location_Img from "../assets/location.png"
import Email_Img from "../assets/email.png"
import Phone_Img from "../assets/phone.png"

function ContactUs() {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });



    return (
        <div className="container">
            <span className="big-circle"></span>
            <img src={Shape_Img} className="square" alt="gray dots" />
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
                    <p className="text">
                        Training & Placement Officer
                        Government College of Engineering and Technology,
                        Chak Bhalwal,
                        Jammu, J&K State(India).
                    </p>

                    <div className="info">
                        <div className="information">
                            <a href="https://maps.app.goo.gl/8uainY69F9BfQReG7" target='_blank' className="dec"><img src={Location_Img} className="icon"
                                alt="" /></a>
                            <p>Chak Bhalwal , Jammu
                                Jammu and Kashmir , 181122</p>
                        </div>
                        <div className="information">
                            <a href="mailto:tpogcetjammu@gmail.com" target='_blank'>
                                <img src={Email_Img} className="icon" alt="" /></a>
                            <p>tpogcetjammu@gmail.com
                            </p>
                        </div>
                        <div className="information">
                            <a href="tel:>+919419137081" target='_blank'>
                                <img src={Phone_Img} className="icon" alt="" /></a>
                            <p>+91 94191-37081</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/placementcell.gcet/" target='_blank'>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/gcetjammu" target='_blank'>
                                <i className="fab fa-twitter"></i>
                            </a>
                            {/* <a href="#" target='_blank'>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target='_blank'>
                                <i className="fab fa-linkedin-in"></i>
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* <div className="contact-form">
                    <span className="circle1 one"></span>
                    <span className="circle two"></span> */}

                    {/* <form className='main-form' action="/send_email" method="post" autocomplete="off">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                            <input type="text" name="name" className="container-input" id="name" autocapitalize='off' required />
                            <label for="">Name</label>
                            <span>Name</span>
                        </div>
                        <div className="input-container">
                            <input type="email" name="email" className="container-input" id="email" required />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
                        <div className="input-container">
                            <input type="tel" name="phone" className="container-input" id="phone" required />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div className="input-container textarea">
                            <textarea name="message" className="container-input" id="message" required></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
                        <input type="submit" value="Send" className="btn" />
                    </form> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ContactUs