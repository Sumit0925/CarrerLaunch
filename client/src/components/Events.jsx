import React from 'react'
import "./assets/Events.css"
import galleryImages, { recruitmentImages } from './galleryImages'
import EventCard from './EventCard'

function Events() {
    return (
        <>
            <h1 className='event-heading'>Gallery</h1>
            <h2 className='event-sub-heading'>Mega Job Fair 2023</h2>
            <div className='event-wrapper'>
                {galleryImages.map((image, index) => {
                    return (
                        <EventCard
                            key={index}
                            EventImg={image.EventImg}
                        />
                    )
                })}
            </div>
            <h2 className='event-sub-heading'>Recruitments Pics </h2>
            <div className='event-wrapper'>
                {recruitmentImages.map((image, index) => {
                    return (
                        <EventCard
                            key={index}
                            EventImg={image.EventImg}
                        />
                    )
                })}
            </div>
            

        </>
    )
}

export default Events