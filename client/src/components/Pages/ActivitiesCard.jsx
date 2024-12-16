import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function ActivitiesCard(props) {
    return (
        <>
        <div className='activity-wrapper'>
                        <div className='activities-heading'>
                <h1 className='activities-sub-heading'>{props.activityName}</h1>
                <a href={props.activityDetail} target='_blank' rel="noreferrer" className='pressed hover'><FaExternalLinkAlt/></a>

            </div>
            <div className='activity-image'>
                <img src={props.activityImg} alt="event_Img" />
            </div>
        </div>

        </>
    )
}

export default ActivitiesCard