import React from 'react'
import "../assets/UpcomingActivities.css"
import upcomingActivitiesRecord from '../upcomingActivitiesRecord'
import UpcomingActivitiesCard from './UpcomingActivitiesCard'

function UpcomingActivities() {
  return (
    <>
      <h1 className='event-heading'> Upcoming Activities & Events</h1>
      {
        upcomingActivitiesRecord.map((upactivity,index)=>{
          return (
            <UpcomingActivitiesCard
            key={index}
            upcomingActivityName={upactivity.upcomingActivityName}
            upcomingDetail={upactivity.upcomingDetail}
            />
          )
        })
      }

    </>
  )
}

export default UpcomingActivities