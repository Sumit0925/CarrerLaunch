import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function UpcomingActivitiesCard(props) {
    return (
        <>
            <div className='upcoming-activities-heading'>
                <h1 className='upcoming-activities-sub-heading'>{props.upcomingActivityName}</h1>
                <a href={props.upcomingDetail} target='_blank' rel="noreferrer" className='pressed hover'><FaExternalLinkAlt /></a>

            </div>
        </>
    )
}

export default UpcomingActivitiesCard