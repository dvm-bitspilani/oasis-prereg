import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RazzmatazzForm = () => {
  const navigate = useNavigate();

  const collegeNameRef = useRef(null);
  const teamNameRef = useRef(null);
  const teamSizeRef = useRef(null);
  const teamLeadRef = useRef(null);
  const videoSubmissionRef = useRef(null);
  const phoneRef = useRef(null);

  const handleTeamSizeInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };
  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      collegeNameRef.current,
      teamNameRef.current,
      teamSizeRef.current,
      teamLeadRef.current,
      videoSubmissionRef.current,
      phoneRef.current,
    ];
    const isEmpty = requiredFields.some((fieldRef) => !fieldRef.value);

    const isPhoneNumberValid = /^\d{10}$/.test(phoneRef.current.value);

    if (!isPhoneNumberValid) {
      alert("Phone number must contain 10 digits!");
      return;
    }

    if (isEmpty) {
      alert("Please fill in all the required fields!");
      return;
    }

    const teamSize = parseInt(teamSizeRef.current.value);
    if (isNaN(teamSize) || teamSize < 1) {
      alert("Please enter a valid team size (minimum 1)!");
      return;
    }

    const isTeamNameValid = /^[a-zA-Z0-9\s]+$/.test(teamNameRef.current.value);
    if (!isTeamNameValid) {
      alert("Team name should only contain letters, numbers, and spaces!");
      return;
    }

    const isLikelyUrl = (string) => {
      return /^(https?:\/\/|www\.)/.test(string);
    };

    if (!isLikelyUrl(videoSubmissionRef.current.value)) {
      alert("Please enter a valid URL for video submission");
      return;
    }

    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/RazzmatazzRegistration/";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = {
        id: localStorage.getItem("userId"),
        college_name: collegeNameRef.current.value,
        team_name: teamNameRef.current.value,
        team_size: parseInt(teamSizeRef.current.value),
        team_lead: teamLeadRef.current.value,
        video_submission: videoSubmissionRef.current.value,
        email_address: JSON.parse(localStorage.getItem("userData"))
          .user_profile_obj.google_email,
        phone: phoneRef.current.value,
      };
      console.log(data);
      axios
        .post(postLink, data, config)
        .then((response) => {
          console.log("Backend Response:", response.data);
          localStorage.setItem(
            "razzmatazz_registered",
            response.data.razzmatazz_registered
          );
          navigate("/Razzmatazz/About");
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
        });
    };
    sendRegisteredDataToBackend();
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-heading">Register for Razzmatazz</div>
            <form action="" className="main-form">
              <label htmlFor="collegeName" className="input-heading">
                College Name
              </label>
              <input type="text" className="input-field" ref={collegeNameRef} />

              <label htmlFor="teamName" className="input-heading">
                Team Name
              </label>
              <input type="text" className="input-field" ref={teamNameRef} />

              <label htmlFor="teamSize" className="input-heading">
                Number of People in the Team
              </label>
              <input
                type="number"
                className="input-field"
                ref={teamSizeRef}
                onInput={handleTeamSizeInput}
                min="1"
              />

              <label htmlFor="teamLead" className="input-heading">
                Team Lead
              </label>
              <input type="text" className="input-field" ref={teamLeadRef} />

              <label htmlFor="phone" className="input-heading">
                Contact Number
              </label>
              <input
                type="tel"
                className="input-field"
                ref={phoneRef}
                onChange={handlePhoneNumberInput}
              />

              <label htmlFor="videoSubmission" className="input-heading">
                Video Submission (Drive Link)
              </label>
              <input
                type="text"
                className="input-field"
                ref={videoSubmissionRef}
              />

              <div className="submit-wrapper">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              {localStorage.getItem("razzmatazz_registered") === "true" && (
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

export default RazzmatazzForm;
