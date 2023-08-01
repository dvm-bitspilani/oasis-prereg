import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";
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
    <motion.div className="page-container" animate={{scale:[0,1]}}
        transition={{ duration: 1 }}>
      <motion.div className="about-container">
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
          <Link to="/RapWars/form" className="about-link">
            {/* <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button> */}
            <MyRegisterationButton disabled={localStorage.getItem('rapwars_registered')==="true"} argument={localStorage.getItem('rapwars_registered')} />
          </Link>
          {/* <MyPaymentButton disabled={localStorage.getItem('rapwars_paid')==='true'} argument={localStorage.getItem('rapwars_paid')} /> */}
        </div>
      </motion.div>
      </motion.div>
    {/* </motion.div> */}
    </div>
  );
}
