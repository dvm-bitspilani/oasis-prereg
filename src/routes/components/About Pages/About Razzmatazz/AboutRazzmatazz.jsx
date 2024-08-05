import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutRazzmatazz() {
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
          <div className="about-title">About Razzmatazz</div>
          <div className="about-text">
            Razzmatazz is a one-of-its-kind group dance competition that tests
            finesse and artistry in showcasing coordinated group choreographies.
            With equal weightage in judgement given to execution, presentation
            and creativity, it is fashioned to test the esprit de corps of the
            participating teams. All forms of dance including fusions are
            allowed. So trip the light fantastic toe and let there be a
            razzle-dazzle of sheer splendor.
            <br /> <br />
            Contact details:
            <br />
            <br />
            Hasan Zareb - 8133996076 (Co-Ordinator)
            <br />
            Shambhavi Sinha - 8879593730 (Secretary)
          </div>
          <div className="about-buttons-container">
            <Link to="/Razzmatazz/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("razzmatazz_registered") === "true"
                }
                argument={localStorage.getItem("razzmatazz_registered")}
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
