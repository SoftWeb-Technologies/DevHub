import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Title } from "../../components";
import { PatreonLogo } from "../../DevHubIcons";

import PatreonSupport from "../../assets/images/supportImgs/patreon-support.svg";

import "./Support.css";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="support__main__container">
      <Title title={"Support"} />
      <div className="support__header">
        <Navbar show={"active"} theme="dark">
          <Button
            label={"Sign Up"}
            primary={true}
            onClick={() => navigate("/auth")}
          />
        </Navbar>
      </div>

      <div className="support__content__container">
        <div className="support__content">
          <div className="support__left__container">
            <p
              style={{
                color: "gray",
                marginBottom: "1rem",
              }}
            >
              Support
            </p>
            <h2
              style={{
                fontSize: "1.8rem",
                letterSpacing: "0.1rem",
              }}
            >
              Support Us
            </h2>

            <p
              style={{
                color: "gray",
                fontSize: "0.86rem",
                marginTop: "1rem",
              }}
            >
              Support us and the product on patreon.
            </p>
            <div className="support__btn__container">
              <Button
                renderIconLeft={true}
                Icon={PatreonLogo}
                label={"Support"}
                primary={true}
              />
            </div>
          </div>

          <div className="support__patreon__img__container">
            <img src={PatreonSupport} alt="patreon-support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
