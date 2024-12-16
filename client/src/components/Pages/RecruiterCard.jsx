import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


function RecruiterCard(props) {
    return (
        <div className='recruiter-section'>
            <div className='company-logo'><img src={props.companyLogo} alt="company-logo" className='image'/></div>
            
            <h1>{props.companyName}</h1>
            <a href={props.companySite} target='_blank' className='pressed hover'><FaExternalLinkAlt/></a>
        </div>
    )
}

export default RecruiterCard