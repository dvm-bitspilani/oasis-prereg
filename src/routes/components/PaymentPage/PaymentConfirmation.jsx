import { useEffect, useState } from "react";
import axios from "axios";

const PaymentConfirmation = () => {
  const [status, setStatus] = useState("🔄 Verifying your payment...");
  const events = localStorage.getItem("current_event");

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const res = await axios.post(
          `https://prereg.bits-oasis.org/main/monetary/${events}/payment_response`,
          {
            ORDERID: localStorage.getItem("order_id"),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.status === "TXN_SUCCESS") {
          setStatus("Payment Successful!");
          if (events) {
            localStorage.setItem(`${events}_paid`, "true");
          }
        } else {
          setStatus(" Payment Failed or Pending.");
        }
      } catch (error) {
        console.error("Error confirming payment:", error);
        setStatus(" Error verifying payment.");
      }
    };

    confirmPayment();
  }, [events]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "24px" }}>
      <h1>{status}</h1>
    </div>
  );
};

export default PaymentConfirmation;
