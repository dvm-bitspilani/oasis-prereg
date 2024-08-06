import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutStagePlay() {
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
          <div className="about-title">About Stage Play</div>
          <div className="about-text">
            It is said that the stage is a magic circle where only the most real
            things happen, a neutral territory outside the jurisdiction of fate
            where stars may be crossed with impunity. A truer and more real
            place does not exist in the universe. The Stage Play event brings
            you a wholesome feat of drama to awaken and thrill your senses. It
            gives you a chance to captivate your audience with your actions and
            expressions and to watch and perform captivating plays.
          </div>
          <div className="about-buttons-container">
            <Link to="/StagePlay/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("stageplay_registered") === "true"
                }
                argument={localStorage.getItem("stageplay_registered")}
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
