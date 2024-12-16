import React from 'react'
import "../assets/Recruiter.css"
import recruitersList from '../recruitersList'
import RecruiterCard from './RecruiterCard'

function Recruiter() {
    return (
        <>
            <h1 className='recruiter-heading'>Major Recruiters</h1>
            <div className='recruiter-wrapper'>
                {
                    recruitersList.map((recruiter, index) => {
                        return (
                            <RecruiterCard
                                key={index}
                                companyLogo={recruiter.logo}
                                companyName={recruiter.company}
                                companySite={recruiter.site}
                            />
                        )
                    })
                }

            </div>

        </>
    )
}

export default Recruiter