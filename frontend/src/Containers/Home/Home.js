import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, SideNavigation, Title } from "../../components";

import { HomeImg } from "../../constants/Images";
import { DownArrowIcon } from "../../DevHubIcons";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div id="home">
      <Title title="home" />

      <SideNavigation setIsNavActive={setIsNavActive} />

      <main className="home__main__container">
        <Navbar theme={"light"}>
          <Button label="Sign Up" onClick={() => navigate("/auth")} />

          <Button
            customClassName={"hideInMobileView"}
            label="Sign In"
            onClick={() => navigate("/auth")}
          />
        </Navbar>
        <div className={`home__main ${isNavActive ? "active" : ""}`}>
          <div className="home__header">
            <div className="home__content">
              <h1>We put everything together for you! </h1>
              <p>Developer's need is all we care for.</p>

              <Button label="Get Started" onClick={() => navigate("/auth")} />
            </div>
            <div className="home__img">
              <img src={HomeImg} alt="homeImg" />
            </div>
          </div>
        </div>
      </main>
      <div className="down__arrow__container">
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default Home;