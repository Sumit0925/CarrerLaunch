import React from 'react';
import "./assets/About.css"
import TP_Img from "../assets/TP.jpeg"

function About() {
  return (
    <div className="home-bg">
        <section className="home">
            <span className="big-circle"></span>
            {/*<img src="/shape.png" alt="" className="square"> */}
            <div className="content">
                <div className="div-1">
                    <h1 className="intro">Goal</h1>
                    <p>The goal of Training & Placement Cell is to Provide employment opportunities and world className
                        training to GCET Students in Leading Orgainizations.
                    </p>
                </div>
                <div className="div-2">
                    <h2>Training</h2>
                    <p>IT arranges training for students in industries for 4 weeks at the end of 6th Semester. The
                        students of the college undergo their training at various prestigious organizations as BSNL, RRL
                        Jammu, HCL etc. The students act as a channel of communication with industries.</p>
                </div>
                <div className="div-3">
                    <h2>Placements</h2>
                    <p> All the reputed organizations including MNCs come to the College for campus recruitment. To
                        achieve its goal, the Training & Placement Cell works towards recognizing the core competencies
                        of students. It works through a close knot organization and has a structure which conveys
                        information to the students at the fastest possible rate. The Training & Placement Cell firmly
                        believes in 'Industry-Institute Interaction'. In order to accomplish 'Industry-Institute
                        Interaction' it organizes technical talks and seminars to provide a platform for the budding
                        engineers to interact with professionals from various industries. It encourages visits to the
                        industries by the college students. It arranges for industrial problems to be worked on by
                        students as part of their projects. It also takes suggestions from members of industry regarding
                        designing/changing of curriculum.</p>
                </div>
            </div>
            <div className="image">
                <span className="circle one"></span>
                <span className="circle two"></span>
                <img src={TP_Img} alt="college image" className="img1 college-img"/>
            </div>
        </section>
    </div>
  )
}

export default About