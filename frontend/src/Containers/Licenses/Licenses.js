import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Title } from "../../components";
import toast, { Toaster } from "react-hot-toast";
import "./Licenses.css";

const Licenses = () => {
  const navigate = useNavigate();
  const notify = () => {
    toast.success("Thanks for accepting our EULA!");
  };
  const disagree = () => {
    toast.error("You have to agree our EULA!");
  };

  return (
    <div className="licenses__main__container">
      <Title title={"Licenses"} />
      <div className="licenses__header">
        <Navbar show={"active"} theme="dark">
          <Button
            label={"Sign Up"}
            primary={true}
            onClick={() => navigate("/auth")}
          />
        </Navbar>
      </div>

      <div className="licenses__content__container">
        <p
          style={{
            color: "gray",
            marginBottom: "1rem",
          }}
        >
          Licenses
        </p>
        <h2
          style={{
            fontSize: "1.8rem",
            letterSpacing: "0.1rem",
          }}
        >
          End user Licenses
        </h2>

        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "1rem",
          }}
        >
          This End user License Agreement for DevHub is an terms of the license
          that DevHub have. Read it carefully.
        </p>

        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "2.5rem",
          }}
        >
          These End user license agreement (“EULA”) is an legal agreement
          between you (either an individual or single entity) and SoftWeb
          Technologies.
        </p>
        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "3rem",
          }}
        >
          The Software Product is protected by copyright laws and international
          copyright treaties, as well as intellectual property laws and
          entities. The Software Product is licensed, and not sold.
        </p>
        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "1rem",
          }}
        >
          *Grant of License. This EULA grants you the following rights:
        </p>
        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "1rem",
          }}
        >
          *Software. You may use the product as described in Service here.
        </p>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <div className="licenses__btn__container">
            <Button onClick={disagree} label="Not right now" />
            <Button onClick={notify} label="I agree" primary={true} />
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licenses;
