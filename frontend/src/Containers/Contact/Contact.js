import React, { useState } from "react";
import {
  Button,
  Footer,
  Navbar,
  SideNavigation,
  TextArea,
  TextInput,
  Title,
} from "../../components";

import "./Contact.css";
import { email } from "../../constants/Icons";
import { PaperAirPlane } from "../../DevHubIcons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const companyEmailAddress = ["contactdevhub@gmail.com", "@DevHub"];

const Contact = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [contactFormData, setContactFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData);
  };

  return (
    <div id="contact">
      <Title title="Contact" />

      <SideNavigation setIsNavActive={setIsNavActive} />

      <main
        className={`contact__main__container ${isNavActive ? "active" : ""}`}
      >
        <Navbar theme={"light"}>
          {currentUser ? (
            <Button label="Dashboard" onClick={() => navigate("/dashboard")} />
          ) : (
            <Button label="Sign Up" onClick={() => navigate("/auth")} />
          )}
        </Navbar>
        <div className="contact__header">
          <h1>Get in touch</h1>
          <p>
            Got some queries about the product? Well, we're always available to help you ;)
          </p>
        </div>

        <div className="contact__form__container">
          <div className="glass__effect">
            <div className="circle" />
            <div className="contact__form__left__container">
              <div>
                <h2>Contact Info</h2>
                <p>
                  Here is where you can reach out to us. We're damn sure we'll get back to you and solve all your doubts and queries related to anything (;
                </p>
              </div>
              <div>
                {companyEmailAddress.map((emailAddress, index) => {
                  return (
                    <div key={index}>
                      <img src={email} alt="email" />
                      <p>{emailAddress}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="contact__form__right__container">
            <div className="form__container">
              <form>
                <TextInput
                  name={"username"}
                  inputType={"text"}
                  placeholder={"Your name"}
                  value={contactFormData.username}
                  onChange={onChangeHandler}
                />
                <TextInput
                  name={"email"}
                  inputType={"email"}
                  placeholder={"Your Email"}
                  value={contactFormData.email}
                  onChange={onChangeHandler}
                />
                <TextInput
                  name={"subject"}
                  inputType={"text"}
                  placeholder={"Subject"}
                  value={contactFormData.subject}
                  onChange={onChangeHandler}
                />
                <TextArea
                  placeholder="Message.."
                  name={"message"}
                  value={contactFormData.message}
                  onChange={onChangeHandler}
                />

                <div className="sendMessage__btn">
                  <Button
                    customStyle={{
                      paddingLeft: "1.2rem",
                      paddingRight: "1.2rem",
                    }}
                    primary={true}
                    label={"Send Message"}
                    renderIconRight={true}
                    Icon={PaperAirPlane}
                    onClick={handleContactFormSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Contact;
