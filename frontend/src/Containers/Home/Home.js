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

        <Button customStyle={{ marginLeft: 30 }} label="Sign In" onClick={handleSignUp} />
      </Header>

      <div className="home__main">
        <div className="home__header">
          <div className="home__content">
            <p>
              We are a team of <br></br> <span>Creators & Innovators</span>
            </p>
            <p>Developer's need is all we care for.</p>

            <Button customStyle={{ width: "300px" }} label="Get Started" />
          </div>
          <div className="home__img">
            <img src={HomeImg} alt="homeImg" />
          </div>
        </div>

        <div className="home__desc">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
