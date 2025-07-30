import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "../about.css";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton"
export default function AboutSS() {
  const [soapbox_paid, setsoapbox_paid] = useState(false);
  
  const [registeredState, setRegisteredState] = useState(false);
  const sendPaymentDatatoBackend = () => {
    let postLink = `https://prereg.bits-oasis.org/GetPreRegUser/${localStorage.getItem(
      "userId"
    )}`;
    axios
      .get(postLink)
      .then((response) => {
        // console.log("Backend Response:", response.data);
        // let soapbox_registered = response.data.soapbox_registered
        setRegisteredState(response.data.soapbox_registered);
        setsoapbox_paid(response.data.soapbox_paid);
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
            <b>What is Standup Soapbox? </b><b>Stand-Up Soapbox</b> is a 
            pan-India platform that gives aspiring stand-up comedians the 
            stage they deserve. Finalists earn the opportunity to perform 
            live at <b>OASIS</b> , one of India’s largest cultural festivals,
            hosted at <b>BITS Pilani</b> .

            <br />
            <br />
            <b>Rules for Standup Soap Box | Delhi Prelims</b>
            <br /><br />
            <ol className="rules-list">
    <li>Comedians of all ages are allowed to participate.</li>
    <li>Each participant has a maximum of 3 minutes to perform.</li>
    <li>The languages in which comedians can perform are Hindi, English or a mix of both.</li>
    <li>There should be no jokes about religion, race, ethnicity etc.</li>
    <li>Foul language is not allowed in the performance.</li>
    <li>Violation of points 4th and 5th will result in disqualification of the comedian.</li>
    <li>You must bring one companion to the event; if you fail to do so, you will be disqualified.</li>
    <li>If the set seems to be plagiarized, the participants will be disqualified.</li>
  </ol>
          </div>
          <div className="about-buttons-container">
            <Link to="/StandupSoapbox/form" className="about-link">
              {/* <motion.button disabled className="about-preregister-button" whileHover={{scale:1.1}} whileTap = {{scale:0.9}}>Register Now</motion.button> */}
              <MyRegisterationButton
                disabled={localStorage.getItem("soapbox_registered") === "true"}
                argument={localStorage.getItem("soapbox_registered")}
              />
            </Link>
            <MyPaymentButton
  disabled={localStorage.getItem('soapbox_paid') === 'true'}
  argument={localStorage.getItem('soapbox_paid')} event= 'soapbox'
/>
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
