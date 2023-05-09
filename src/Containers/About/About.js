import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, SideNavigation, Title } from "../../components";
import { AboutImg } from "../../constants/Images";
import { DownArrowIcon } from "../../DevHubIcons";

import "./About.css";

const About = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div id="about">
      <Title title="About" />
      <SideNavigation setIsNavActive={setIsNavActive} />

      <main className="about__main__container">
        <Navbar theme={"light"}>
          {currentUser ? (
            <Button label="Dashboard" onClick={() => navigate("/dashboard")} />
          ) : (
            <Button label="Sign Up" onClick={() => navigate("/auth")} />
          )}
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
            <h1>Empower your development with DevHub!</h1>
            <p>
            Welcome to DevHub, your all-in-one solution for developers! DevHub is a comprehensive tool designed to streamline the development process, faster collaboration, and promote continuous learning. With features such as Blog Space, Tech Hunt, Contests, and Task List, DevHub is the ultimate platform for developers to enhance their skills, stay up-to-date with the latest tech trends, and showcase their expertise.
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
