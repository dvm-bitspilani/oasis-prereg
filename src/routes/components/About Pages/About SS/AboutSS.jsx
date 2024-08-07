import React, { useEffect, useState } from "react";
import "../about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";
import axios from "axios";
export default function AboutSS() {
  const [paidState, setPaidState] = useState(false);
  const [registeredState, setRegisteredState] = useState(false);
  const sendPaymentDatatoBackend = () => {
    let postLink = `https://bits-oasis.org/2024/main/preregistrations/GetPreRegUser/${localStorage.getItem(
      "userId"
    )}`;
    axios
      .get(postLink)
      .then((response) => {
        // console.log("Backend Response:", response.data);
        // let soapbox_registered = response.data.soapbox_registered
        setRegisteredState(response.data.soapbox_registered);
        setPaidState(response.data.soapbox_paid);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };
  useEffect(() => {
    sendPaymentDatatoBackend();
  }, []);
  // console.log(paidState);
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
        <motion.div className="about-container">
          <div className="about-title">About Standup Soapbox</div>
          <div className="about-text">
            Welcome to Standup Soapbox, a highlight of Oasis '24, the 52nd
            edition of BITS Pilani's celebrated cultural festival. Oasis is one
            of India's premier cultural fests, drawing thousands of participants
            and attendees nationwide. This October, we are thrilled to present
            Standup Soapbox, a vibrant platform for emerging comedians to
            showcase their talent.
            <br />
            <br />
            <b>What is Standup Soapbox?</b> Standup Soapbox is an exciting event
            designed to discover and promote new and upcoming stand-up
            comedians. It provides a unique opportunity for artists to perform
            in front of an engaged audience of over 5000 people. The event will
            be held offline, ensuring maximum exposure and interaction for the
            participants.
            <br />
            <br />
            <b>Event Structure</b> The competition will be conducted in two
            stages:
            <br />
            <br />
            <b>1. Preliminary Rounds:</b> Held at selected comedy clubs across
            India, these rounds will feature a strict selection, elimination,
            and evaluation process to ensure only the best talents make it to
            the finals.
            <br />
            <br /> <b>2. Final Round:</b> The finalists will compete at the BITS
            Pilani campus during Oasis '24. The winner will get the prestigious
            opportunity to open for one of India's top comedians at our flagship
            event, N2O. Past appearances at N2O include renowned comedians like
            Zakir Khan, Biswa Kalyan Rath, Abhishek Upmanyu, and Aakash Gupta.{" "}
            <br /> <br /> <b>Why Participate?</b>
            <br />
            <br /> ● <b>Exposure:</b> Perform in front of a large, diverse
            audience and gain nationwide recognition. <br />
            <br /> ● <b>Networking:</b> Connect with industry professionals,
            fellow comedians, and comedy enthusiasts. ● Prizes: The winner gets
            a chance to perform alongside top comedians, with travel and
            accommodation covered by us. <br />
            <br />● <b>Prizes:</b> The winner gets a chance to perform alongside
            top comedians, with travel and accommodation covered by us.
            <br /> <br />
            Contact details:
            <br />
            <br />
            Aditya Rana - 8869889654
            <br />
            Vedant Shah - 7506553199
            <br />
            Devasri Bali - 9810097764
          </div>
          <div className="about-buttons-container">
            <Link to="/StandupSoapbox/form" className="about-link">
              {/* <motion.button disabled className="about-preregister-button" whileHover={{scale:1.1}} whileTap = {{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={localStorage.getItem("soapbox_registered") === "true"}
                argument={localStorage.getItem("soapbox_registered")}
              />
            </Link>
            {/* {localStorage.getItem("soapbox_registered") ? <MyPaymentButton disabled={paidState} argument={paidState}   />: <></>} */}
            {/* {registeredState? (
    <MyPaymentButton disabled={paidState} argument={paidState} />
  ) : null} */}
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
