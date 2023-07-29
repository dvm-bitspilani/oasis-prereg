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
      <motion.div className="page-container"  initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .5 }}>
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
          <div className="about-buttons-container" >
            <Link to="/form" className="about-link">
              <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap = {{scale:0.9}}>Register Now</motion.button>
            </Link>
            <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap = {{scale:0.9}}>Pay Now</motion.button>
          </div>{" "}
        </div>
      </motion.div>
      {/* </motion.div> */}
    </>
  );
}
