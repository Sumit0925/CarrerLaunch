import React from 'react'



function EventCard(props) {
    return (
        <>
            
            
            <div className='gallery-image'>
                <img src={props.EventImg} alt="event_Img" />
            </div>
        </>

    )
}

export default EventCard