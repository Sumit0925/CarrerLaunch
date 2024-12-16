import React from 'react'
import "../assets/Connect.css"
import Whatapp_Logo from "../../assets/whatsapp-logo.png"
import Twitter_Logo from "../../assets/twitter-logo.png"
function Connect() {
  return (
    <>
      <h1 className='connect-heading'>Connect</h1>
      <div className="connect">
        <div className="connect1">
          <div className="connect1-logo">
            <img src={Whatapp_Logo} alt="whatsapp-logo" />
          </div>
          <div className="text">
            <h4 className="text-text secondary-text">via Whatsapp</h4>
            <a href="https://chat.whatsapp.com/J2ueaPvNJPo1rj089jHUVH">
            <div className="btn hover pressed">Send Message</div>

            </a>
          </div>
        </div>
        <div className="connect2">
          <div className="connect2-logo"><img src={Twitter_Logo} alt="twitter-logo" /></div>
          <div className="text">
            <h4 className="text-text secondary-text">via Twitter</h4>
            <a href="https://twitter.com/gcetjammu" target='_blank'>
            <div className="text btn hover pressed">Connect</div>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Connect