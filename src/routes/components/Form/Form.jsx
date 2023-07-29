import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar";

const Form = () => {
  const nameRef = useRef(null);
  const rapnNameRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const orgRef = useRef(null);
  const linksRef = useRef(null);
  const socialsRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      nameRef.current,
      stateRef.current,
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
  };
  return (
    <>
      <Navbar></Navbar>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-heading">Register for RapWars</div>
            <form action="" className="main-form">
              <label htmlFor="name" className="input-heading">
                Name
              </label>
              <input type="text" className="input-field" ref={nameRef} />
              <label htmlFor="rapname" className="input-heading">
                Rap Name (if any)
              </label>
              <input type="text" className="input-field" ref={rapnNameRef} />
              <label htmlFor="state" className="input-heading">
                State
              </label>
              <select className="input-field" ref={stateRef}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <label htmlFor="city" className="input-heading">
                City
              </label>
              <input type="text" className="input-field" ref={cityRef} />
              <label htmlFor="student" className="input-heading student">
                Are you a student?
              </label>
              <input type="checkbox" className="is-student" />
              <br></br>
              <label htmlFor="organisation" className="input-heading">
                Organisation linked to (if any)
              </label>
              <input type="text" className="input-field" ref={orgRef} />
              <label htmlFor="links" className="input-heading">
                Link to your past performances/tracks
              </label>
              <input type="text" className="input-field" ref={linksRef} />
              <label htmlFor="socials" className="input-heading">
                Link to your socials (if any)
              </label>
              <input type="text" className="input-field" ref={socialsRef} />
              <label htmlFor="phone" className="input-heading">
                Contact Number
              </label>
              <input type="phone" className="input-field" ref={phoneRef} />
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
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Form;
