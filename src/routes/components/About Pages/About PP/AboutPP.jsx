import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";


export default function AboutPP() {
  return (
    <>
    <Navbar/>
    {/* <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        transition={{ duration: .5 }}
      > */}
      <motion.div className="page-container" initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .5 }}>
        <div className="about-container">
          <div className="about-title">About Purple Prose</div>
          <div className="about-text">
            BITS, Pilani brings to you, 'Purple Prose : The Poetry Slam', a one
            of a kind platform for poets across the world to give their
            emotions, a thought and their thoughts, a word. With a chance to
            entertain student community of India's one of the largest institute,
            Purple Prose promises to take creative potential of an individual to
            national scale. So, breathe in experience and breathe out poetry.
          </div>
          <div className="about-buttons-container">
            <Link to="/form" className="about-link">
              <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button>
            </Link>
            <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Pay Now</motion.button>
          </div>
        </div>
      </motion.div>
      {/* </motion.div> */}
    </>
  );
}
