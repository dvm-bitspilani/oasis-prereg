import React from "react";
import "../../background.css";
import "../about.css"
import bgImage from "../../../../assets/rectangle2.png"


export default function AboutRapWars(){
    return(
        <>
        <div className="page-container" style={{
            backgroundImage : `url(${bgImage})`}}>
                <div className="about-container">
                    <div className="about-title">About RapWars</div>
                    <div className="about-text">Seven Years worth immense efforts has led Rap Wars to become one of the most awaited rap battle in India. Original performances and diss battles between talented artists from across India will lead to one winner who out-raps them all. The hunt for the artist has begun! If you think you have what it takes to rap your way to glory, we are coming to your gully! This year, elimination rounds will be held all across India and the winners of each region will get a chance to perform in finals during OASIS 2022 and compete for the prize pool!</div>
                    <button className="about-preregister-button">Preregister</button>
                </div>
        </div>
        </>
    )
}