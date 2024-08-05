import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ChoreoForm = () => {
  const navigate = useNavigate();
  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleTeamSizeInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const collegeRef = useRef(null);
  const teamSizeRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);
  const teamMembers = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      collegeRef.current,
      teamSizeRef.current,
      nameRef.current,
      phoneRef.current,
      emailRef.current,
    ];
    const isEmpty = requiredFields.some((fieldRef) => !fieldRef.value);

    if (isEmpty) {
      alert("Please fill in the required fields!");
      return;
    }
    const isPhoneNumberValid = /^\d{10}$/.test(phoneRef.current.value);

    if (!isPhoneNumberValid) {
      alert("Phone number must contain 10 digits!");
      return;
    }

    const emailValue = emailRef.current.value;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!isEmailValid) {
      alert("Invalid email address format.");
      return;
    }

    const teamMemberNames = Array.from(
      teamMembers.current.querySelectorAll("input")
    )
      .map((input) => input.value)
      .filter((name) => name.trim() !== "");

    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/ChoreoRegistration/";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = {
        id: localStorage.getItem("userId"),
        college_name: collegeRef.current.value,
        team_size: teamSizeRef.current.value,
        team_lead: nameRef.current.value,
        team_lead_phone: phoneRef.current.value,
        team_lead_email: emailRef.current.value,
        video_submission: linksRef.current.value,
        members: teamMemberNames,
      };
      axios
        .post(postLink, data, config)
        .then((response) => {
          console.log("Backend Response:", response.data);
          localStorage.setItem(
            "choreo_registered",
            response.data.choreo_registered
          );
          navigate("/Choreo/About");
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
        });
    };
    sendRegisteredDataToBackend();
  };
  return (
    <>
      <Navbar></Navbar>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        // animate={{scale:[0,1]}}
        transition={{ duration: 0.5 }}
      >
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-heading">Register for Choreo</div>
            <form action="" className="main-form">
              <label htmlFor="collegename" className="input-heading">
                College Name
              </label>
              <input type="text" className="input-field" ref={collegeRef} />
              <label htmlFor="teamSize" className="input-heading">
                Number of Team Members
              </label>
              <input
                type="number"
                className="input-field"
                ref={teamSizeRef}
                onInput={handleTeamSizeInput}
                min="1"
              />
              <label htmlFor="name" className="input-heading">
                Team Representative Name
              </label>
              <input type="text" className="input-field" ref={nameRef} />
              <label htmlFor="email" className="input-heading">
                Team Representative Email
              </label>
              <input type="text" className="input-field" ref={emailRef} />
              <label htmlFor="phone" className="input-heading">
                Team Representative Contact No.
              </label>
              <input
                type="tel"
                className="input-field"
                ref={phoneRef}
                onChange={handlePhoneNumberInput}
              />
              <label htmlFor="links" className="input-heading">
                Google Drive Link to your Video Submission
              </label>
              <input type="text" className="input-field" ref={linksRef} />
              <label htmlFor="membername" className="input-heading">
                Team Member Names
              </label>
              <div ref={teamMembers}>
                {Array.from({ length: 20 }).map((input, index) => (
                  <input key={index} type="text" className="input-field" />
                ))}
              </div>
              <div className="submit-wrapper">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              {localStorage.getItem("choreo_registered") === "true" && (
                <div className="successMessageContainer">
                  <span className="successMessage">
                    Successfully Registered!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ChoreoForm;
