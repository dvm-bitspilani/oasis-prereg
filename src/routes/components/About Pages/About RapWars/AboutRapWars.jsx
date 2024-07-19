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
      <div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="page-container">
          <motion.div className="about-container">
            <div className="about-title">About RapWars</div>
            <div className="about-text">
              Rap Wars is a battle Rap based elimination event whose prelims are
              conducted in four cities - Delhi, Mumbai, Jaipur and Indore. Two
              rappers from each city are shortlisted based on their showcase
              performance and battle elimination. They will be invited to BITS
              Pilani, Pilani Campus to compete at the Rap Wars finale during our
              cultural fest Oasis. <br /> <br />
              The two winners will be sponsored by BITS Pilani, Pilani Campus
              for travel and accommodation during the RapWars finale during
              Oasis - The second largest cultural festival in Asia, conducted in
              the months of October-November. It is the only college festival in
              India which can boast of running non-stop for 96 hours. With 80+
              events encompassing music, dance, drama, literary, fine arts and
              fashion, and a footfall of more than 15,000 students from 100s of
              colleges. <br />
              <br />
              Along with the opportunity to perform for a huge crowd, you stay
              in contention for exciting prizes.
              <br />
            </div>
            <div className="about-buttons-container">
              <Link to="/RapWars/form" className="about-link">
                {/* <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button> */}
                <MyRegisterationButton
                  disabled={
                    localStorage.getItem("rapwars_registered") === "true"
                  }
                  argument={localStorage.getItem("rapwars_registered")}
                />
              </Link>
              {/* <MyPaymentButton disabled={localStorage.getItem('rapwars_paid')==='true'} argument={localStorage.getItem('rapwars_paid')} /> */}
            </div>
          </motion.div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}
