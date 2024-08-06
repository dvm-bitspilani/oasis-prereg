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
      </motion.div>
    </>
  );
};

export default DesertDuelForm;
