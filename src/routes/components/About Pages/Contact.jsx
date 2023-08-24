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
                            <div className="person-details"><p>Samarth Sahu</p><p>+916376232447</p></div><p className="contact-events">PURPLE PROSE</p></div>
                            <div className="contact-container">
                        <div className="person-details"><p>Aryan Keshri</p><p>+919724208508</p></div><p className="contact-events">Standup Soapbox</p></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
