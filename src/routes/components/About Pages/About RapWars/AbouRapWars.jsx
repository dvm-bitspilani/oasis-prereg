import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";


export default function AboutRapWars() {
  return (
    <div>
    <Navbar />
    {/* <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 1 }}
    transition={{ duration: .5 }}
  > */}
    <motion.div className="page-container"  initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .5 }}>
      <div className="about-container">
        <div className="about-title">About RapWars</div>
        <div className="about-text">
          Seven Years worth immense efforts has led Rap Wars to become one of
          the most awaited rap battle in India. Original performances and diss
          battles between talented artists from across India will lead to one
          winner who out-raps them all. The hunt for the artist has begun! If
          you think you have what it takes to rap your way to glory, we are
          coming to your gully! This year, elimination rounds will be held all
          across India and the winners of each region will get a chance to
          perform in finals during OASIS 2022 and compete for the prize pool!
        </div>
        <div className="about-buttons-container">
          <Link to="/form" className="about-link">
            <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button>
          </Link>
          <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Pay Now</motion.button>
        </div>
      </div>
      </motion.div>
    {/* </motion.div> */}
    </div>
  );
}
