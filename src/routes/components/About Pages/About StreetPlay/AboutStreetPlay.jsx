import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutStreetPlay() {
  return (
    <>
      <Navbar />
      <div
        className="page-container"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <motion.div className="page-container" 
        animate={{scale:[0,1]}}
        transition={{ duration: 1 }}> */}
        <motion.div className="about-container">
          <div className="about-title">About Street Play</div>
          <div className="about-text">
            Oasis brings to you, right from the streets, a loud and
            larger-than-life exchange of ideologies, with drama full of humour
            and zeal. Street Plays aka Nukkad Natak, are carried out to
            propagate social and political messages among the masses, amidst the
            direct, intimate and effective means of theatre by means of shouts,
            chants, drums and catchy songs.
          </div>
          <div className="about-buttons-container">
            <Link to="/StreetPlay/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("streetplay_registered") === "true"
                }
                argument={localStorage.getItem("streetplay_registered")}
              />
            </Link>
            {/* <MyPaymentButton disabled={true} argument={localStorage.getItem('purpleprose_paid')} /> */}
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
