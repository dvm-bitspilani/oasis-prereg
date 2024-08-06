import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StreetPlayForm = () => {
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

    const userDataString = localStorage.getItem("userData");
    let email_address = "";
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        email_address = userData.user_profile_obj;
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    } else {
      console.error("No userData found in localStorage");
    }

    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/StreetPlayRegistration/";
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
        script_submission: linksRef.current.value,
        members: teamMemberNames,
      };
      axios
        .post(postLink, data, config)
        .then((response) => {
          console.log("Backend Response:", response.data);
          localStorage.setItem(
            "streetplay_registered",
            response.data.streetplay_registered
          );
          navigate("/StreetPlay/About");
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
        transition={{ duration: 0.5 }}
      >
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-heading">Register for Street Play</div>
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
                Google Drive Link to PDF Version of Script
              </label>
              <input type="text" className="input-field" ref={linksRef} />
              <label htmlFor="membername" className="input-heading">
                Team Member Names
              </label>
              <div ref={teamMembers}>
                {Array.from({ length: 20 }).map((_, index) => (
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
              {localStorage.getItem("streetplay_registered") === "true" && (
                <div className="successMessageContainer">
                  <span className="successMessage">
                    Successfully Registered!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>{" "}
      <div className="madeWithText">
        <span>Made with</span>
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1783_3207)">
            <path
              d="M9.40262 15.0857L8.26729 14.0413C4.23491 10.3462 1.57275 7.90133 1.57275 4.9184C1.57275 2.47351 3.46758 0.56665 5.87918 0.56665C7.24157 0.56665 8.54916 1.20755 9.40262 2.2124C10.2561 1.20755 11.5637 0.56665 12.9261 0.56665C15.3377 0.56665 17.2325 2.47351 17.2325 4.9184C17.2325 7.90133 14.5703 10.3462 10.5379 14.0413L9.40262 15.0857Z"
              fill="#FB723D"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1783_3207">
              <rect
                width="18.7917"
                height="15.0333"
                fill="white"
                transform="translate(0.00683594 0.56665)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <span>by DVM</span>
      </div>
    </>
  );
};

export default StreetPlayForm;
