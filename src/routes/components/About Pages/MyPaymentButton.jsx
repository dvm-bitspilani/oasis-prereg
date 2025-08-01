import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MyPaymentButton = ({ disabled, argument, event }) => {
  const navigate = useNavigate();
  const [backendResponse, setBackendResponse] = useState(null);
  const isPaid = argument === "true";
  const hoverAnimation = isPaid || disabled ? {} : { scale: 1.1 };
  const tapAnimation = isPaid || disabled ? {} : { scale: 0.9 };
  const sendPaymentDatatoBackend = () => {
    let postLink =
      `https://prereg.bits-oasis.org/main/monetary/${event}/get_paytm_checksum`;
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    let data = {
      user_id: localStorage.getItem("userId")
    };
    axios
      .post(postLink, data, config)
      .then((response) => {
        localStorage.setItem("current_event", event);
        navigate("/payment-page");
        console.log("Backend Response:", response.data);
        setBackendResponse(response.data);
        localStorage.setItem(
          "payment_dict",
          JSON.stringify(response.data.payment_dict)
        );
        localStorage.setItem("checksum", response.data.checksum);
        localStorage.setItem("order_id", response.data.order_id);
        localStorage.setItem("txntoken", response.data.txntoken);
        localStorage.setItem("mid", response.data.mid);
        // localStorage.setItem("cb_url", response.data.cb_url);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };
  const handlePaymentClick = () => {
    const isReg = localStorage.getItem(`${event}_registered`) === "true";
    if (!isReg) {
      alert("Please register first before making a payment.");
      return;
    }
    sendPaymentDatatoBackend();
  };
  return (
    <>
      <motion.button
        disabled={disabled || isPaid}
        className="about-preregister-button"
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        onClick={handlePaymentClick}
      >
        {disabled ? "Paid!" : "Pay Now"}
      </motion.button>
    </>
  );
};

export default MyPaymentButton;
