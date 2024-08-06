import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutStreetDance() {
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
          <div className="about-title">About Street Dance</div>
          <div className="about-text">
            As the name suggests, Street Dance is a street-style dance event
            which features performances by teams from colleges around the
            country. Street Dance is considered a crowd favourite and is held in
            the Rotunda, the open- air amphitheatre of BITS. The first stage
            consists of 2 rounds; a performance and a battle round. From this, 4
            teams are selected for the second stage. The second stage is a
            face-off challenge between pairs of teams. These pairs are allotted
            randomly
          </div>
          <div className="about-buttons-container">
            <Link to="/StreetDance/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("streetdance_registered") === "true"
                }
                argument={localStorage.getItem("streetdance_registered")}
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
