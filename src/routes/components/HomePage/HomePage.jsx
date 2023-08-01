import React from 'react'
import "./HomePage.css"
import bgImage from "../../../assets/rectangle2.png"
import purposeprose from "../../../assets/purposeprose.png"
import rapwars from "../../../assets/rapwars.png"
import standupsoapbox from "../../../assets/standupsoapbox.png"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import {motion} from "framer-motion"
export default function HomePage() {
    return (
        <>
    <Navbar />
            <div className="homepage-container">
                <div className="homepage-events-container">
                    <Link to="/PurpleProse/About">
                        <motion.div className="homepage-event-wrapper"  whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${purposeprose})`
                            }}></div>
                            <span className="homepage-event-name">Purpose Prose</span>
                        </motion.div>
                        </Link>
                    <Link to="/RapWars/About">
                        <motion.div className="homepage-event-wrapper" whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${rapwars})`
                            }}></div>
                            <span className="homepage-event-name">Rap Wars</span>
                        </motion.div></Link>
                    <Link to="/StandupSoapbox/About">
                        <motion.div className="homepage-event-wrapper" whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                            <div className="homepage-event-img" style={{
                                backgroundImage: `url(${standupsoapbox})`
                            }}></div>
                            <span className="homepage-event-name">Standup Soapbox</span>
                        </motion.div></Link>
                </div>
            </div>


        </>
    )
}
