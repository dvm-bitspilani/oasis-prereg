import React from 'react'
import "./HomePage.css"
import bgImage from "../../../assets/rectangle2.png"
import purposeprose from "../../../assets/purposeprose.png"
import rapwars from "../../../assets/rapwars.png"
import standupsoapbox from "../../../assets/standupsoapbox.png"
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className="homepage-container" style={{
                backgroundImage: `url(${bgImage})`
            }}>
                <div className="homepage-events-container">
                    <Link to="/PurpleProse/About">
                        <div className="homepage-event-wrapper">
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${purposeprose})`
                            }}></div>
                            <span className="homepage-event-name">Purpose Prose</span>
                        </div></Link>
                    <Link to="/RapWars/About">
                        <div className="homepage-event-wrapper">
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${rapwars})`
                            }}></div>
                            <span className="homepage-event-name">Rap Wars</span>
                        </div></Link>
                    <Link to="/StandupSoapbox/About">
                        <div className="homepage-event-wrapper">
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${standupsoapbox})`
                            }}></div>
                            <span className="homepage-event-name">Standup Soapbox</span>
                        </div></Link>
                </div>
            </div>


        </>
    )
}
