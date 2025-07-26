import React, {useEffect} from "react";
import './PaymentPage.css'
import { useNavigate } from "react-router-dom";
const ShowPaymentPage = () => {
  
  const navigate = useNavigate();
  
    useEffect(() => {
        document.paytm.submit();
        navigate("/payment-confirmation");
      }, []);

  return (
    <>
          <h1 className="payments-page-heading">Please do not refresh this page...</h1>
        <form
          method="post"
          action={`https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=${localStorage.getItem("mid")}&orderId=${localStorage.getItem("order_id")}`}
          name="paytm"
        >
              {Object.entries(localStorage.getItem('payment_dict')).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}
              <input type="hidden" name="CHECKSUMHASH" value={localStorage.getItem('checksum')} />
              <input type="hidden" name="mid" value={localStorage.getItem('mid')} />
              <input type="hidden" name="orderId" value={localStorage.getItem('order_id')} />
              <input type="hidden" name="txnToken" value={localStorage.getItem('txntoken')} />
          {/* <script type="text/javascript">document.paytm.submit();</script> */}
        </form>
    </>
  );
};

export default ShowPaymentPage;
