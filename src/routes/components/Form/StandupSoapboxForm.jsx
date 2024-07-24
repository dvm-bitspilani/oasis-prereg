import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const StandupSoapboxForm = () => {
  const navigate = useNavigate();
  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };
  const nameRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      nameRef.current,
      cityRef.current,
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
    const sendRegisteredDataToBackend = () => {
      const postLink =
        "https://bits-oasis.org/2024/main/preregistrations/StandupSoapboxRegistration/";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = {
        id: localStorage.getItem("userId"),
        name: nameRef.current.value,
        city: cityRef.current.value,
        phone: phoneRef.current.value,
        email_address: emailRef.current.value,
      };
      axios
        .post(postLink, data, config)
        .then((response) => {
          // console.log('Backend Response:', response.data);
          localStorage.setItem(
            "soapbox_registered",
            response.data.soapbox_registered
          );
          navigate("/StandupSoapbox/About");
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
            <div className="form-heading">Register for Standup Soapbox</div>
            <form action="" className="main-form">
              <label htmlFor="name" className="input-heading">
                Name
              </label>
              <input type="text" className="input-field" ref={nameRef} />
              <label htmlFor="city" className="input-heading">
                City
              </label>
              <select type="text" className="input-field" ref={cityRef}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <label htmlFor="phone" className="input-heading">
                Contact Number
              </label>
              <input
                type="tel"
                className="input-field"
                ref={phoneRef}
                onChange={handlePhoneNumberInput}
              />
              <label htmlFor="email" className="input-heading">
                E-Mail ID
              </label>
              <input type="text" className="input-field" ref={emailRef} />
              <div className="submit-wrapper">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              {localStorage.getItem("soapbox_registered") === "true" && (
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

export default StandupSoapboxForm;
