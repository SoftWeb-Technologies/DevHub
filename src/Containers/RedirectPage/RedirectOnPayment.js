import React from "react";
import { paymentSuccessImg } from "../../constants/Images";
import "./RedirectOnPayment.css";

const RedirectOnPayment = () => {
  return (
    <div className="payment__redirect__container">
      <div
        style={{
          width: "450px",
          objectFit: "contain",
        }}
      >
        <img src={paymentSuccessImg} alt="payment-success" width={"100%"} />
      </div>

      <h1>Your Payment is Successful</h1>
      <p
        style={{
          color: "gray",
          paddingTop: "20px",
        }}
      >
        Thank for your payment. An automated payment receipt will be sent to
        your registered email.{" "}
      </p>

      <a
        style={{
          padding: "15px",
          textDecoration: "underline",
          color: "var(--primary-clr)",
          cursor: "pointer",
        }}
        href="/dashboard"
      >
        Back To Dashboard
      </a>
    </div>
  );
};

export default RedirectOnPayment;
