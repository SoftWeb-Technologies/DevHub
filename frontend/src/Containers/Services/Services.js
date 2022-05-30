import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Title } from "../../components";
import "./Services.css";

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
  
        <div className="services__content__container"/>
          <div className="services__left__container">
          </div>
          <div className="services__right__container"/>
            <p>Agreement</p>
            <h2>Terms of Service</h2>

const services = [
    {
        contents: (
            <div>
                <p>
                We know it's tempting to skip these Terms of Service, but it's important to establish what you can expect from us as you use DevHub, and what we expect from you.
                </p>

                <p>
                These Terms of Service reflect the way DevHub works, the laws that apply to the company, and certain things we’ve always believed to be true. As a result, these Terms of Service helps define DevHub’s relationship with you as you interact and use our product. These Terms includes the following topics:
                </p>
        )
    }
]

const Topics = () => {
    {
        contents: (
            <div>
                1. What you can expect from us, which decribes how we provide and develope our service
            </div>
        ),
        (
            <div>
                2. What we expect from you, which establishes certain rules for using our service.
            </div>
        ),
        (
            <div>
                3. Content in DevHub, which describes the intellectual property rights to the content you find in our services - whether that content belongs to you, DevHub, or others.
            </div>
        ),
        (
            <div>
                4. Incase of problems or disagreements, which descibes other legal rights you have, and what expect incase someone violates these terms.
            </div>
        ),
        (
            <div>
                5. Understanding these terms is important because, to use our service, you must aceept these terms.
            </div>
        )
    }

    return (
        <Button Label={"I Agree"} primary={true} onClick={() => navigate("/Home")} />
        <Button Label={"Not right now"} primary={true} onClick={() => navigate("/Home")} />  
        )
}

export default Services;