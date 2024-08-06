import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutChoreo() {
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
          <div className="about-title">About Choreo</div>
          <div className="about-text">
            Choreo is a dance event which features contemporary dance
            performances by teams from colleges around the country. This event
            is conducted in the central auditorium. After the initial
            elimination round, about six to eight teams are shortlisted for the
            final round. The final round features contemporary dance
            performances that are usually based on a certain theme.
          </div>
          <div className="about-buttons-container">
            <Link to="/Choreo/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={localStorage.getItem("choreo_registered") === "true"}
                argument={localStorage.getItem("choreo_registered")}
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
