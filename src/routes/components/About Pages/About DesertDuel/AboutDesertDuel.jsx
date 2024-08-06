import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutDesertDuel() {
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
          <div className="about-title">About Desert Duel</div>
          <div className="about-text">
            It is a solo dance event in which dancers from every college
            participate and showcase their talent. Depending on the dancer,
            styles can vary from western to classical to hip-hop and even to the
            typical Bollywood style.
            <br /> <br />
            Contact details:
            <br />
            <br />
            Hasan Zareb - 8133996076 (Co-Ordinator)
            <br />
            Shambhavi Sinha - 8879593730 (Secretary)
          </div>
          <div className="about-buttons-container">
            <Link to="/DesertDuel/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("desertduel_registered") === "true"
                }
                argument={localStorage.getItem("desertduel_registered")}
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
