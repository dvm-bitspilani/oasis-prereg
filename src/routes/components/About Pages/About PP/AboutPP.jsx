import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutPP() {
  return (
    <>
    <Navbar/>
    <div className="page-container" 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: .5 }}
      >
      {/* <motion.div className="page-container" 
        animate={{scale:[0,1]}}
        transition={{ duration: 1 }}> */}
        <motion.div className="about-container">

          <div className="about-title">About Purple Prose</div>
          <div className="about-text">
          Introducing 'Purple Prose: The Poetry Slam' from BITS, Pilani, where poets from all corners of the subcontinent converge to breathe life into their emotions and give voice to their thoughts. This extraordinary platform invites you to captivate and entertain the thriving student community of one of India's premier institutes. Purple Prose is your gateway to taking your creative talents to a national audience. So, take a deep breath of experience and exhale the magic of poetry. Join us as we turn thoughts into beautifully crafted verses!
          </div>
          <div className="about-buttons-container">
            <Link to="/PurpleProse/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton disabled={localStorage.getItem('purpleprose_registered')==="true"} argument={localStorage.getItem('purpleprose_registered')}/>
            </Link>
            {/* <MyPaymentButton disabled={true} argument={localStorage.getItem('purpleprose_paid')} /> */}
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
