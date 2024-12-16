import React from 'react'
import "../assets/Activities.css"
import activitiesRecord from '../activitiesRecord'
import ActivitiesCard from './ActivitiesCard'

function Activities() {
  return (
    <>
            <h1 className='event-heading'>Activities & Events</h1>
            {/* <h2 className='event-sub-heading'>Mega Job Fair 2023</h2> */}
            <div className='activity-main-wrapper'>
                {
                    activitiesRecord.map((activity,index)=>{
                        return (
                            <ActivitiesCard 
                                key={index}
                                activityName={activity.activityName}
                                activityImg={activity.activityImg}
                                activityDetail={activity.activityDetail}
                            />
                        )
                    })
                }
            </div>
            
            

        </>
  )
}

export default Activities