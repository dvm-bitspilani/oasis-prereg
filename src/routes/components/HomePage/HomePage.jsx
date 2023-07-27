import React from 'react'
import "./HomePage.css"
import bgImage from "../../../assets/rectangle2.png"
import purposeprose from "../../../assets/purposeprose.png"
import rapwars from "../../../assets/rapwars.png"
import standupsoapbox from "../../../assets/standupsoapbox.png"

export default function HomePage(){
  return (
    <>
        <div className="homepage-container" style={{
            backgroundImage : `url(${bgImage})`
        }}>
            <div className="homepage-events-container">
                <div className="homepage-event-wrapper">
                <div className="homepage-event-img" style={{
                    backgroundImage : `url(${purposeprose})`
                }}></div>
                <span className="homepage-event-name">Purpose Prose</span>
                </div>
                <div className="homepage-event-wrapper">
                <div className="homepage-event-img" style={{
                    backgroundImage : `url(${rapwars})`
                }}></div>
                    <span className="homepage-event-name">Rap Wars</span>
                </div>
                <div className="homepage-event-wrapper">
                <div className="homepage-event-img" style={{
                    backgroundImage : `url(${standupsoapbox})`
                }}></div>
                    <span className="homepage-event-name">Standup Soapbox</span>
                </div>
            </div>
        </div>


    </>
  )
}
