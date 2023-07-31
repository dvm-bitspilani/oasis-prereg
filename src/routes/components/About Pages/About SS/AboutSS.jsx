import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";
export default function AboutSS() {
  return (
    <>
    <Navbar />
      <div className="page-container">
        <div className="about-container">
          <div className="about-title">About Standup Soapbox</div>
          <div className="about-text">
            Oasis, BITS PILANI, brings to you the fourth edition of Stand-up
            Soapbox, one of the largest stand-up competitions for amateur
            comedians out there. Stand-up soapbox is one of the flagship events
            of our cultural festival. This event is geared towards finding new
            talents in the stand-up world and giving them an opportunity to
            share a stage with the celebrities of the industry. Eliminations
            will be held online. The winners of this round will get an amazing
            opportunity to open for established comedians in front of a lively
            audience of around 2000 people. So, are you funny innuf?
          </div>
          <div className="about-buttons-container" >
            <Link to="/StandupSoapbox/form" className="about-link">
              {/* <motion.button disabled className="about-preregister-button" whileHover={{scale:1.1}} whileTap = {{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton disabled={localStorage.getItem('soapbox_registered')==="true"} argument={localStorage.getItem('soapbox_registered')} />
            </Link>
            <MyPaymentButton disabled={localStorage.getItem('soapbox_paid')==='true'} argument={localStorage.getItem('soapbox_paid')} />
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
