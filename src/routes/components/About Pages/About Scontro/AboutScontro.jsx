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
            <div className="about-title">About Scontro</div>
            <div className="about-text">
              Scontro, the exhilarating DJ battle event set to take center stage
              during Oasis, the esteemed cultural fest of BITS Pilani, promises
              to be a thrilling and unforgettable experience for music
              enthusiasts and festival-goers alike. Showcasing exceptional DJ
              talent, Scontro provides an electrifying platform for emerging
              artists to shine. As aspiring DJs compete in a dynamic two-stage
              battle, attendees can expect to witness unmatched mixing prowess,
              beatmatching skills, and crowd-pleasing selections. The finalists
              will have the unique opportunity to perform live on the vibrant
              campus, infusing the event with energy and excitement. Scontro not
              only seeks to discover the best emerging DJ talent but also aims
              to create a memorable and immersive musical experience for
              everyone attending Oasis. Get ready for a fusion of beats, talent,
              and electrifying performances at Scontro during Oasis 2024.{" "}
              <br/>
              <br/>
              <span>Winners get cash prizes worth Rs. 50,000/-</span>
            </div>
            <div className="about-buttons-container">
              <Link to="/Scontro/form" className="about-link">
                {/* <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button> */}
                <MyRegisterationButton
                  disabled={
                    localStorage.getItem("scontro_registered") === "true"
                  }
                  argument={localStorage.getItem("scontro_registered")}
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
