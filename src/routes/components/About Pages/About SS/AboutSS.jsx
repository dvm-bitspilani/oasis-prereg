import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";

export default function AboutSS() {
  return (
    <>
    <Navbar />
     {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
        transition={{ duration: .5 }}
      > */}
      <div className="page-container">
        <div className="about-container">
          <div className="about-title">About Standup Soapbox</div>
          <div className="about-text">
            Oasis, BITS PILANI, brings to you the fourth edition of Stand-up
            Soapbox, one of the largest stand-up competitions for amateur
            comedians out there. Stand-up soapbox is one of the flagship events
            of our cultural festival. This event is geared towards finding new
            talents in the stand-up world and giving them an opportunity to
            share a stage with the celebrities of the industry. Eliminations
            will be held online. The winners of this round will get an amazing
            opportunity to open for established comedians in front of a lively
            audience of around 2000 people. So, are you funny innuf?
          </div>
          <div className="about-buttons-container">
            <Link to="/form" className="about-link">
              <button className="about-preregister-button">Register Now</button>
            </Link>
            <button className="about-preregister-button">Pay Now</button>
          </div>{" "}
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
