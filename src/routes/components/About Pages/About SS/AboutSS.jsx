import React from "react";
import "../../background.css";
import "../about.css"
import bgImage from "../../../../assets/rectangle2.png"


export default function AboutSS(){
    return(
        <>
        <div className="page-container" style={{
            backgroundImage : `url(${bgImage})`}}>
                <div className="about-container">
                    <div className="about-title">About Standup Soapbox</div>
                    <div className="about-text">Oasis, BITS PILANI, brings to you the fourth edition of Stand-up Soapbox, one of the largest stand-up competitions for amateur comedians out there. Stand-up soapbox is one of the flagship events of our cultural festival. This event is geared towards finding new talents in the stand-up world and giving them an opportunity to share a stage with the celebrities of the industry. Eliminations will be held online. The winners of this round will get an amazing opportunity to open for established comedians in front of a lively audience of around 2000 people. So, are you funny innuf?</div>
                    <button className="about-preregister-button">Preregister</button>
                </div>
        </div>
        </>
    )
}