import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, SideNavigation, Title } from "../../components";

//import { HomeImg } from "../../constants/Images";
import LandingImage from "../../constants/Images";
// import Lottie from "lottie-react";
import { DownArrowIcon } from "../../DevHubIcons";
import { useSelector } from "react-redux";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div id="home">
      <Title title="Home" />

      <SideNavigation setIsNavActive={setIsNavActive} />

      <main className="home__main__container">
        <Navbar theme={"light"}>
          {isAuthenticated ? (
            <Button label="Dashboard" onClick={() => navigate("/dashboard")} />
          ) : (
            <Button label="Sign Up" onClick={() => navigate("/auth")} />
          )}
        </Navbar>
        <div className={`home__main ${isNavActive ? "active" : ""}`}>
          <div className="home__header">
            <div className="home__content">
              <h1>We put everything together for you! </h1>
              <p>Developer's need is all we care for.</p>

              <Button label="Get Started" onClick={() => navigate("/auth")} />
            </div>
            <div className="home__img">
              {/* <Lottie animationData={LandingImage} /> */}
            </div>
          </div>
        </div>

        <div className="down__arrow__container">
          <DownArrowIcon />
        </div>
      </main>
    </div>
  );
};

export default Home;
