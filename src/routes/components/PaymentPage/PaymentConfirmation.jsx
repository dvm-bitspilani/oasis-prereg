import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PaymentConfirmation = () => {
  return(
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "24px" }}>
      <h1 style={{color:"white"}}>Payment Successful</h1>
      <Link to="/home">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </Link>
    </div>
  )
};

export default PaymentConfirmation;
