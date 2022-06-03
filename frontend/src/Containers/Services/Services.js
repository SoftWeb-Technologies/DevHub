import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Title } from "../../components";
import "./Services.css";

const Topics = () => [
  "What you can expect from us, which describes how we provide and develope our service",

  "What we expect from you, which establishes certain rules for using our service.",

  "Content in DevHub, which describes the intellectual property rights to the content you find in our services - whether that content belongs to you, DevHub, or others.",

  "Incase of problems or disagreements, which describes other legal rights you have, and what expect incase someone violates these terms.",
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="services__main__container">
      <Title title={"Services"} />
      <div className="services__header">
        <Navbar show={"active"} theme="dark">
          <Button
            label={"Sign Up"}
            primary={true}
            onClick={() => navigate("/auth")}
          />
        </Navbar>
      </div>

      <div className="services__content__container">
        <p
          style={{
            color: "gray",
            marginBottom: "1rem",
          }}
        >
          Agreement
        </p>
        <h2
          style={{
            fontSize: "1.8rem",
            letterSpacing: "0.1rem",
          }}
        >
          Terms of Service
        </h2>

        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "1rem",
          }}
        >
          We know it's tempting to skip these Terms of Service, but it's
          important to establish what you can expect from us as you use DevHub,
          and what we expect from you.
        </p>

        <p
          style={{
            color: "gray",
            fontSize: "0.86rem",
            marginTop: "1rem",
          }}
        >
          These Terms of Service reflect the way DevHub works, the laws that
          apply to the company, and certain things we’ve always believed to be
          true. As a result, these Terms of Service helps define DevHub’s
          relationship with you as you interact and use our product. These Terms
          includes the following topics:
        </p>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          {Topics().map((topic, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",

                marginTop: "1rem",
              }}
            >
              <SquareBox />
              <p
                style={{
                  color: "gray",
                  fontSize: "0.86rem",
                  marginLeft: "1rem",
                }}
              >
                {topic}
              </p>
            </div>
          ))}

          <p
            style={{
              color: "gray",
              fontSize: "0.86rem",
              marginTop: "2rem",
            }}
          >
            {" "}
            Understanding these terms is important because, to use our service,
            you must accept these terms.
          </p>

          <div className="services__btn__container">
            <Button label={"Not right now"} />
            <Button label={"I agree"} primary={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SquareBox = () => {
  return (
    <div
      style={{
        minWidth: "1rem",
        minHeight: "1rem",
        backgroundColor: "#1fc0f2",
      }}
    />
  );
};

export default Services;
