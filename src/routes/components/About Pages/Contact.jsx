import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./../Navbar/Navbar";

export default function AboutPP() {
    return (
        <>
            <Navbar />
            <div className="page-container">
                <div className="about-container">
                    <div className="main-container">
                    <div className="contact-title">Contact</div>
                    <div className="about-text contact">
                        <div className="contact-container">
                            <div className="person-details"><p>Irvit</p><p>+919811358655</p></div><p className="contact-events">SOAPBOX</p></div>
                            <div className="contact-container">
                        <div className="person-details"><p>Abhigyan Sharma</p><p>+916388489257</p></div><p className="contact-events">RAPWARS | PURPLE PROSE | SOAPBOX</p></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
