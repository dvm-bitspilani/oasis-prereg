import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PitchPerfectForm = () => {
  const navigate = useNavigate();
  const [teamSize, setTeamSize] = useState(1);
  const [teamMembers, setTeamMembers] = useState([["", ""]]);

  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleTeamSizeInput = (e) => {
    const size = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
    if (size >= 1 && size <= 20) {
      setTeamSize(size);
      const newTeamMembers = Array.from({ length: size }, (_, i) => {
        return teamMembers[i] || ["", ""];
      });
      setTeamMembers(newTeamMembers);
    } else if (size < 1) {
      setTeamSize(1);
      setTeamMembers([["", ""]]);
    } else if (size > 20) {
      setTeamSize(20);
      const newTeamMembers = Array.from({ length: 20 }, (_, i) => {
        return teamMembers[i] || ["", ""];
      });
      setTeamMembers(newTeamMembers);
    }
  };

  const handleMemberInputChange = (index, field, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index][field] = value;
    setTeamMembers(newTeamMembers);
  };

  const collegeRef = useRef(null);
  const teamSizeRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);
  const teamNameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      collegeRef.current,
      teamSizeRef.current,
      nameRef.current,
      phoneRef.current,
      emailRef.current,
      teamNameRef.current,
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

    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/PitchPerfectRegistration/";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = {
        email_address: emailRef.current.value,
        phone: phoneRef.current.value,
        name: nameRef.current.value,
        city: "none",
        id: localStorage.getItem("userId"),
        college_name: collegeRef.current.value,
        team_size: teamSizeRef.current.value,
        team_name: teamNameRef.current.value,
        video_submission: linksRef.current.value,
        team_members_details: teamMembers,
      };
      axios
        .post(postLink, data, config)
        .then((response) => {
          // console.log("Backend Response:", response.data);
          localStorage.setItem(
            "pitchperfect_registered",
            response.data.pitchperfect_registered
          );
          alert("Successfully Registered!");
          navigate("/PitchPerfect/About");
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
            <div className="form-heading">Register for Pitch Perfect</div>
            <form action="" className="main-form">
              <label htmlFor="teamname" className="input-heading">
                Team Name
              </label>
              <input type="text" className="input-field" ref={teamNameRef} />
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
              <div>
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <input
                      type="email"
                      className="input-field"
                      placeholder={`Member ${index + 1} Email`}
                      value={member[0]}
                      onChange={(e) =>
                        handleMemberInputChange(index, 0, e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="input-field"
                      placeholder={`Member ${index + 1} Name`}
                      value={member[1]}
                      onChange={(e) =>
                        handleMemberInputChange(index, 1, e.target.value)
                      }
                    />
                  </div>
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
              {localStorage.getItem("pitchperfect_registered") === "true" && (
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

export default PitchPerfectForm;
