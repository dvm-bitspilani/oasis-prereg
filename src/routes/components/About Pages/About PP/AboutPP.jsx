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
          <div className="about-title">About Purple Prose</div>
          <div className="about-text">
            Purple Prose is a Slam Poetry event whose prelims are conducted in
            six cities - Delhi, Jaipur, Pune, Indore, Kolkata and Hyderabad. Two
            finalists from each city are shortlisted based on their performance
            in the preliminary round. They will be invited to BITS Pilani,
            Pilani Campus to participate in Purple Prose during our cultural
            fest Oasis. <br /> <br />
            The two winners will be sponsored by BITS Pilani, Pilani Campus for
            travel and accommodation during the RapWars finale during Oasis -
            The second largest cultural festival in Asia, conducted in the
            months of October-November. It is the only college festival in India
            which can boast of running non-stop for 96 hours. With 80+ events
            encompassing music, dance, drama, literary, fine arts and fashion,
            and a footfall of more than 15,000 students from 100s of colleges.
            <br /> <br />
            Contact details:<br /><br />
            Avindhya - 7802959072<br />
            Loveesha - 9876120814
          </div>
          <div className="about-buttons-container">
            <Link to="/PurpleProse/form" className="about-link">
            
              {/* <motion.button className="about-preregister-button" whileHover = {{scale:1.1}} whileTap={{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={
                  localStorage.getItem("purpleprose_registered") === "true"
                }
                argument={localStorage.getItem("purpleprose_registered")}
              />
            </Link>
            
            { <MyPaymentButton disabled={localStorage.getItem('purpleprose_paid')==='true'} argument={localStorage.getItem('purpleprose_paid')} event ='purpleprose'/> }
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
