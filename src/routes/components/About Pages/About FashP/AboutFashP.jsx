import React from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";

export default function AboutFashP() {
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
          <div className="about-title">About Fash P</div>
          <div className="about-text">
            Fashion is an art, a religion, a peek into a personality. For some,
            it’s an escape or a disguise while for others it’s just being
            comfortable. But ultimately, fashion is an individual statement of
            expression for each of us and Fashion Parade is the avenue to
            express yourself. The epilogue of one's pursuit of fashion and
            style. With the stage set for ingenious designers to parade their
            stunning models in their own never-seen-before designs, it will be
            an ethereal experience for all.
          </div>
          <div className="about-buttons-container">
            <Link to="/FashP/form" className="about-link">
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={localStorage.getItem("fashp_registered") === "true"}
                argument={localStorage.getItem("fashp_registered")}
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
