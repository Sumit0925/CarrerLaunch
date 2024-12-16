import React from 'react';
import "../assets/Explore.css";
import Pie_Img from "../../assets/pie-chart.png"
import Recruiter_Img from "../../assets/recruiter.png"
import Activity_Logo from "../../assets/activity.png"
import UpcomingActivity_Logo from "../../assets/upcoming_activity.png"
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <>
      <h1 className='explore-heading'>Explore</h1>
      <div className='explore-main-wrapper'>
        <div className='explore-wrapper'>
          <div className="explore">
            <div className="record">
              <div className="record-logo"><img src={Pie_Img} alt="whatsapp-logo" /></div>
              <div className="text">
                <h4 className="text-text secondary-text">Placement Records</h4>
                <Link to="/placement-year">
                  <div className="btn hover pressed">View</div>
                </Link>
              </div>
            </div>

            <div className="recruiter">
              <div className="recruiter-logo"><img src={Recruiter_Img} alt="twitter-logo" /></div>
              <div className="text">
                <h4 className="text-text secondary-text">Major Recruiters</h4>
                <Link to="/recruiter">
                  <div className="btn hover pressed">View</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='explore-wrapper'>
          <div className="explore">
            <div className="record">
              <div className="record-logo"><img src={Activity_Logo} alt="whatsapp-logo" /></div>
              <div className="text">
                <h4 className="text-text secondary-text">Activities and Events</h4>
                <Link to="/activities">
                  <div className="btn hover pressed">View</div>
                </Link>
              </div>
            </div>
            <div className="recruiter">
              <div className="recruiter-logo"><img src={UpcomingActivity_Logo} alt="twitter-logo" /></div>
              <div className="text">
                <h4 className="text-text secondary-text">Upcoming Activities & Events</h4>
                <Link to="/upcoming-activities">
                  <div className="btn hover pressed">View</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore