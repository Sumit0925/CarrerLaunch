import React from 'react';
import "../assets/Faculty.css"
import FacultyCard from './FacultyCard';
import facultyDetails, { studentsDetails } from '../facultyDetails';

function Faculty() {
  return (
    <>
      {/* <h1>T&P Office</h1> */}
      <h1 className="faculty-heading">T&P Office</h1>
      <h1 className='member-heading'>Faculty</h1>
      <div className='wrapper'>

        {
          facultyDetails.map((details,index) => {
            return <FacultyCard
              key={index}
              name={details.name}
              intro={details.faculty}
              img={details.imgURL}
              tel={details.phone}
              email={details.email}
              sendMail={details.sendMail}
            />
          })
        }
        
      </div>
      <h1 className="member-heading">Students</h1>
      <div className='wrapper'>

        {
          studentsDetails.map((details,index) => {
            return <FacultyCard
              key={index}
              name={details.name}
              intro={details.faculty}
              img={details.imgURL}
              tel={details.phone}
              email={details.email}
              sendMail={details.sendMail}
            />
          })
        }
        
      </div>

      {/* <div class="column column3">
        <h3>T&P Office</h3>
        <div class="tp-office">
          <div class="image-div">
            <div class="image">
              <img src="./assets/person.png" alt="facultiy-pic"/>
            </div>
          </div>
          <h1>Prof. Bhawna Sharma</h1>
          <h4>Training and Placement Officer</h4>
          <div class="phone">
            <img src="./assets/telephone1.png" alt="phone-logo"/>
              <h3>+91 XXXXX XXXXX</h3>
          </div>
          <div class="email pressed">
            <img src="./assets/mail1.png" alt="email-logo"/>
              <h3><a href="#">xxx@gmail.com</a></h3>
          </div>
        </div>


      </div> */}
    </>
  )
}

export default Faculty