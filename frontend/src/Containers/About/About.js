import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, SideNavigation, Title } from "../../components";
import { AboutImg } from "../../constants/Images";
import { DownArrowIcon } from "../../DevHubIcons";

import "./About.css";

const About = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="about">
      <Title title="About" />
      <SideNavigation setIsNavActive={setIsNavActive} />

      <main className="about__main__container">
        <Navbar theme={"light"}>
          <Button label="Sign Up" onClick={() => navigate("/auth")} />
        </Navbar>
        <div className={`about__main ${isNavActive ? "active" : ""}`}>
          <div className="about__header">
            <div className="about__content">
              <p>
                We are a team of <br></br> <span>Creators & Innovators</span>
              </p>
              <p>Developer's need is all we care for.</p>

              <Button
                customStyle={{ width: "300px", paddingLeft: "6rem" }}
                label="Get Started"
                onClick={() => navigate("/auth")}
              />
            </div>
            <div className="about__img">
              <img src={AboutImg} alt="aboutImg" />
            </div>
          </div>
          <div className="about__desc">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="down__arrow__container">
          <DownArrowIcon />
        </div>
      </main>
    </div>
  );
};

export default About;
