import React from 'react'
import "./assets/Home.css"
import Principal_Img from "../assets/Principal1.png"
import samplePdf from "../assets/TP_brochure.pdf"
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-layout1'>
          <div className='home-image-layout'>
            <img src={Principal_Img} alt="principal_img" className='principal-img' />
          </div>
          <div className='image-name-layout'>
            <h1>Principal </h1>
          </div>
        </div>
        <div className='home-layout2'>
          <div className='home-message-heading'>
            <h1>From The Principal's Desk</h1>
          </div>
          <div className='home-message'>
            <h1>“We make Technocrats, who proudly says, ‘I am an Engineer, I serve mankind by making dreams come true.”</h1>
          </div>
        </div>

      </div>

      <div>
    
        <div className='home-layout3'>
          <div className='home-message-heading3'>
            <h1>Message</h1>
          </div>
          <hr className='line1'/>
          <div className='home-message3'>
            {/* <h1>“We make Technocrats, who proudly says, ‘I am an Engineer, I serve mankind by making dreams come true.”</h1> */}
            <h1>GCET Jammu has been preferred destination for aspiring
              technologists from across the state for the past several years. GCET consistently attracts the finest faculty and the
              best of students for its B.Tech programme. GCET Jammu
              has a rich tradition of pursuing excellence and has continually reinvented itself in terms of academic programmes
              and research infrastructure. Students are exposed to challenging research based activities and a host of sports, cultural and organizational activities on its vibrant campus.
              The presence of world class facilities, vigorous, institute industry collaborations and industrial training opportunities help students of GCET to excel and be ahead in the competitive professional environment. In the last 30 years,
              GCET Jammu consistently maintains an exemplary recuritment record. Our graduates have been selected by leading national and multinational corporations.
              We highly value our partnership with recruiters and alumni of GCET Jammu and remains committed to making
              your recruiting experience positive and productive
              I invite recruiting organizations and graduating students to find the best match
              between their needs and capabilities.
              With Best Wishes!</h1>
          </div>
        </div>

      </div>

      <div className='home-layout4'>
              <div className="home-heading4">
                <h1>Placement Brochure</h1>
              </div>
              <hr className="line2" />
              <div className="download4">
                <a href={samplePdf} target="_blank"
                    rel="noreferrer">Click to View</a>
              </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Home