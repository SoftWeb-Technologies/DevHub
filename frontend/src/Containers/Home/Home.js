import React from "react";
import { Button, Header, Title } from "../../components";
import { HomeImg } from "../../constants/Images";

import "./Home.css";

const Home = () => {
  const handleSignUp = () => {};
  return (
    <div id="home">
      <Title title="home" />
      <Header>
        <Button label="Sign Up" onClick={handleSignUp} />

        <Button
          customClassName={"hideInMobileView"}
          label="Sign In"
          onClick={handleSignUp}
        />
      </Header>

      <div className="home__main">
        <div className="home__header">
          <div className="home__content">
            <h1>We put everything together for you! </h1>
            <p>Developer's need is all we care for.</p>

            <Button label="Get Started" />
          </div>
          <div className="home__img">
            <img src={HomeImg} alt="homeImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
