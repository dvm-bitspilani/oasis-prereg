import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DesertDuelForm = () => {
  const navigate = useNavigate();

  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const collegeRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      collegeRef.current,
      nameRef.current,
      phoneRef.current,
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

    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/DesertDuelRegistration/";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = {
        id: localStorage.getItem("userId"),
        college_name: collegeRef.current.value,
        phone_number: phoneRef.current.value,
      };
      axios
        .post(postLink, data, config)
        .then((response) => {
          console.log("Backend Response:", response.data);
          localStorage.setItem(
            "desertduel_registered",
            response.data.desertduel_registered
          );
          navigate("/DesertDuel/About");
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
            <div className="form-heading">Register for Desert Duel</div>
            <form action="" className="main-form">
              <label htmlFor="name" className="input-heading">
                Name
              </label>
              <input type="text" className="input-field" ref={nameRef} />
              <label htmlFor="collegename" className="input-heading">
                College Name
              </label>
              <input type="text" className="input-field" ref={collegeRef} />
              <label htmlFor="phone" className="input-heading">
                Contact No.
              </label>
              <input
                type="tel"
                className="input-field"
                ref={phoneRef}
                onChange={handlePhoneNumberInput}
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
              {localStorage.getItem("desertduel_registered") === "true" && (
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

export default DesertDuelForm;
