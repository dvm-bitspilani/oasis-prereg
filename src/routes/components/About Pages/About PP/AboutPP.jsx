import React from "react";
import "../../background.css";
import "../about.css"
import bgImage from "../../../../assets/rectangle2.png"


export default function AboutPP() {
    return (
        <>
            <div className="page-container" style={{
                backgroundImage: `url(${bgImage})`
            }}>
                <div className="about-container">
                    <div className="about-title">About Purple Prose</div>
                    <div className="about-text">BITS, Pilani brings to you, 'Purple Prose : The Poetry Slam', a one of a kind platform for poets across the world to give their emotions, a thought and their thoughts, a word. With a chance to entertain student community of India's one of the largest institute, Purple Prose promises to take creative potential of an individual to national scale. So, breathe in experience and breathe out poetry.</div>
                    <div className="about-buttons-container">
                        <button className="about-preregister-button">Register Now</button>
                        <button className="about-preregister-button">Pay Now</button></div>                
                        </div>
            </div>
        </>
    )
}